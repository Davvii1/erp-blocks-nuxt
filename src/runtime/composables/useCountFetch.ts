import { useFetch, type UseFetchOptions } from '#app'
import { useState } from '#app'

export type CountFetchOptions<T> = UseFetchOptions<T> & {
  count?: {
    source: 'header' | 'key'
    name: string
  }
}

export function useCountFetch<T>(
  url: string | (() => string),
  options: CountFetchOptions<T>,
) {
  const defaultCount = options.count ?? {
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

  const fetch = useFetch(url, {
    ...fetchOptions,

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

  return {
    ...fetch,
    count,
  }
}
