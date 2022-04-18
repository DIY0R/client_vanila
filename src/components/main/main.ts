import {
  componentTask,
  routerInterface,
  routesInfo,
} from '../../routes/routesInfo'
import { HomePage } from './Home/home'

export class Main {
  constructor(private homePage: HomePage, private routes: typeof routesInfo) {}

  toHTML() {
    const div = document.createElement('div')
    window.addEventListener('hashchange', (e) => {
      let route: routerInterface<componentTask> = this.routes.find(
        (route) => route.url == window.location.hash.slice(1)
      )

      div.innerHTML = route.component.toHTML()
    })
    window.addEventListener('load', function (e) {
      console.log(window.location.hash.slice(1))
    })

    div.innerHTML = `<a href='#main'>main</a>`

    return div
  }
}
