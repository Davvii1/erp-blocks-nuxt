import { useFetch, useState, type UseFetchOptions } from '#app'
import type { Ref } from 'vue'

export type CountFetchOptions<T> = UseFetchOptions<T> & {
  count?: {
    source: 'header' | 'key'
    name: string
  }
}

interface extendedFetchReturn<T> extends Pick<ReturnType<typeof useFetch<T>>, 'data' | 'refresh' | 'execute' | 'clear' | 'error' | 'status'> {
  count: Ref<number | undefined>
}

export async function useCountFetch<T>(
  url: string | (() => string),
  options?: CountFetchOptions<T>,
): Promise<extendedFetchReturn<T>> {
  const defaultCount = options && options.count
    ? options.count
    : {
        source: 'header' as const,
        name: 'X-Total-Count',
      }
  const mergedOptions: CountFetchOptions<T> = {
    ...options,
    count: defaultCount,
  }

  const { count: countOpt, ...fetchOptions } = mergedOptions

  const count = useState<number | undefined>(() => undefined)

  const userOnResponse = mergedOptions.onResponse

  const fetch = await useFetch(url, {
    ...fetchOptions,

    server: false,
    lazy: true,

    onResponse(ctx) {
      const { response } = ctx

      if (countOpt) {
        const { source, name } = countOpt

        if (source === 'header') {
          const headerValue = response.headers.get(name)
          count.value = headerValue ? Number.parseInt(headerValue, 10) : undefined
        }

        if (source === 'key') {
          const raw = response._data
          if (raw && typeof raw === 'object' && name in raw) {
            count.value = Number((raw as Record<string, unknown>)[name])
          }
        }
      }

      if (typeof userOnResponse === 'function') {
        return userOnResponse(ctx)
      }
    },
  })

  const result = {
    ...fetch,
    count,
  } as extendedFetchReturn<T>

  return result
}
