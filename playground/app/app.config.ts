export default defineAppConfig({
  erp: {
    menuItems: [
      [
        {
          label: 'Personas',
          icon: 'i-lucide:handshake',
          children: [
            {
              label: 'Asociados',
            },
            {
              label: 'Clientes',
            },
          ],
        },
        {
          label: 'Solicitudes',
          icon: 'i-lucide:receipt-text',
          children: [
            {
              label: 'Generales',
            },
            {
              label: 'Pendientes',
            },
            {
              label: 'Internas',
            },
          ],
        },
        {
          label: 'Depósitos',
          icon: 'i-lucide:banknote',
          children: [
            {
              label: 'Generales',
            },
            {
              label: 'Aplicaciones de pago',
            },
            {
              label: 'Complementos de pago',
            },
          ],
        },
        {
          label: 'Dispersiones',
          icon: 'i-lucide:hand-coins',
          children: [
            {
              label: 'Generales',
            },
            {
              label: 'Masivas',
            },
          ],
        },
        {
          label: 'Legal',
          icon: 'i-lucide:landmark',
          children: [
            {
              label: 'Empresas',
            },
            {
              label: 'Cheques',
            },
          ],
        },
        {
          label: 'Saldos',
          icon: 'i-lucide:wallet',
          children: [
            {
              label: 'Generales',
            },
            {
              label: 'Transpasos',
            },
          ],
        },
        {
          label: 'Tesorería',
          icon: 'i-lucide:wallet-cards',
          children: [
            {
              label: 'Cuentas',
            },
            {
              label: 'Cuentas fallidas',
            },
          ],
        },
        {
          label: 'Finanzas',
          icon: 'i-lucide:badge-dollar-sign',
          children: [
            {
              label: 'Límites',
            },
            {
              label: 'Financiados',
            },
            {
              label: 'Porcentajes pendientes',
            },
            {
              label: 'Distribuciones',
            },
            {
              label: 'Movimientos de distribuciones',
            },
          ],
        },
        {
          label: 'Comisiones',
          icon: 'i-lucide:square-percent',
          children: [
            {
              label: 'Depósitos pendientes',
            },
            {
              label: 'Comisiones generadas',
            },
            {
              label: 'Pagos de comisiones',
            },
            {
              label: 'Cuentas de asociados',
            },
          ],
        },
        {
          label: 'Cajas',
          icon: 'i-lucide:coins',
          children: [
            {
              label: 'Dispersiones pendientes flujo',
            },
            {
              label: 'Movimientos',
            },
            {
              label: 'Solicitudes de dinero',
            },
            {
              label: 'Bancarización',
            },
          ],
        },
        {
          label: 'Gastos',
          icon: 'i-lucide:banknote-arrow-down',
          children: [
            {
              label: 'Lugares',
            },
          ],
        },
      ],
    ],
  },
  auth: {
    logout: () => {
      console.log('logout')
    },
  },
})
