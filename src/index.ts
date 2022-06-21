import { App } from './components/app'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'

import { Main } from './components/main/main'

import { RegisterListeners } from './routes/registerListeners'
import { Route } from './routes/Route'
import { routesInfo } from './routes/routesInfo'
import './inversify.config'
// import './bll/auth/config/auth.container'
export const app = new App('.app', [
  new Header(new Route(), routesInfo),
  new Main(new RegisterListeners(routesInfo)),
  new Footer(),
])

app.render()
