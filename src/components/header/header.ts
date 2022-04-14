import { Route } from '../../routes/Route'
import { routerInterface } from '../../routes/routesInfo'

export class Header {
  constructor(
    private generateRoute: typeof Route,
    private Routes: Array<routerInterface<object>>
  ) {}

  toHTML() {
    const el = document.createElement('nav')
    el.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light')
    el.innerHTML = `<div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler"  type="button" 
       data-bs-toggle="collapse" 
       data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
     aria-label="Toggle navigation">
    
     <span class="navbar-toggler-icon"></span>
    
      </button>
       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        </div>
    </div>
  </div>`

    this.Routes.forEach((urlInfo) => {
      el.querySelector('.navbar-nav').append(
        this.generateRoute.generate(urlInfo.url)
      )
    })
    return el
  }
}
