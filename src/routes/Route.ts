import { routerInterface } from './routesInfo'

export class Route {
  generate(nameRoute: string) {
    const link = document.createElement('a')
    link.classList.add('nav-link', nameRoute)

    link.setAttribute('aria-current', 'page')
    link.href = '#/' + nameRoute
    link.innerHTML = nameRoute

    return link
  }
  addHeaderLinks(el: HTMLElement, routes: Array<routerInterface>) {
    routes.forEach((urlInfo) => {
      el.append(this.generate(urlInfo.url))
    })
  }
}
