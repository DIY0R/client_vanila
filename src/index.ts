import { Authorization } from '../core/Authorization/authorization'
import { useCaseAuth } from '../core/Authorization/useCaseAuth'
import { AuthorizationRealization } from './bll/auth/authorization'
import { App } from './components/app'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'

import { Main } from './components/main/main'
import { RegisterListeners } from './routes/registerListeners'
import { Route } from './routes/Route'
import { routesInfo } from './routes/routesInfo'


export const app = new App('.app', [
  new Header(new Route(), routesInfo),
  new Main(new RegisterListeners(routesInfo)),
  new Footer(),
])

app.render()
