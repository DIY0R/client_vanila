import { componentTask, routerInterface, routesInfo } from './routesInfo'

export class RegisterListeners {
  constructor(private routes: typeof routesInfo) {}

  registerEventsRoutes(div: HTMLElement) {
    window.addEventListener('hashchange', (e) => {
      div.innerHTML = ''
      let route: routerInterface<componentTask> = this.routes.find(
        (route) => '/' + route.url == window.location.hash.slice(1)
      )
      div.append(route.component.toHTML())
    })
    window.addEventListener('load', function (e) {
      console.log(window.location.hash.slice(1))
    })
  }
}
