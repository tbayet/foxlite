export default function ({ store, route, redirect }) {
  const merchantLogged = store.state.merchant.current
  const routePath = route.path.split('/').filter(e => e.length)
  // if router area is reserved for logged merchants
  // console.log('MIDDLEWARE::authenticated')
  if (routePath.length && ['market'].includes(routePath[0])) {
    if (!merchantLogged) {
      redirect('/')
    } else if (routePath.length === 1 || routePath[1] !== merchantLogged) {
      redirect(`/${routePath[0]}/${merchantLogged}`)
    }
  } else if (!routePath.length && merchantLogged) {
    redirect(`/market/${merchantLogged}`)
  }
}
