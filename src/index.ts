import { App } from './components/app'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { HomePage } from './components/main/Home/home'
import { Main } from './components/main/main'
import { RegisterListeners } from './routes/registerListeners'
import { Route } from './routes/Route'
import { routesInfo } from './routes/routesInfo'

const app = new App('.app', [
  new Header(new Route(), routesInfo),
  new Main(new RegisterListeners(routesInfo)),
  new Footer(),
])

app.render()
