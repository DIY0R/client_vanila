export class Route {
  static generate(nameRoute: string) {
    const link = document.createElement('a')
    link.classList.add('nav-link')

    link.setAttribute('aria-current', 'page')
    link.href = '#' + nameRoute
    link.innerHTML = nameRoute

    return link
  }
}
