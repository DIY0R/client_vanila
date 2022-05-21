import { AboutPage } from '../components/main/About/about'
import { HomePage } from '../components/main/Home/home'
export interface componentTask {
  toHTML: () => HTMLElement
}
export interface routerInterface<T = componentTask> {
  url: string
  component: T
}

export const routesInfo: Array<routerInterface<componentTask>> = [
  {
    url: 'home',
    component: new HomePage(),
  },
  {
    url: 'about',
    component: new AboutPage(),
  },
]
