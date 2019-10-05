export default function ({ store, route, redirect }) {
  const userLogged = store.state.users.current
  const routePath = route.path.split('/').filter(e => e.length)
  // if router area is reserved for logged users
  // console.log('MIDDLEWARE::authenticated')
  if (routePath.length && ['market'].includes(routePath[0])) {
    if (!userLogged) {
      redirect('/')
    } else if (routePath.length === 1 || routePath[1] !== userLogged) {
      redirect(`/${routePath[0]}/${userLogged}`)
    }
  } else if (!routePath.length && userLogged) {
    redirect(`/market/${userLogged}`)
  }
}
