import { AboutPage } from '../components/main/About/about'
import { HomePage } from '../components/main/Home/home'

import { LoginPage } from '../components/main/Registration/login/Login'

import { pageTask } from '../types/pageTask'

export interface routerInterface<T = pageTask> {

import { componentTask } from '../types/componentTask'

export interface routerInterface<T = componentTask> {

  url: string
  component: T
  notMain?: boolean
}

export const routesInfo: Array<routerInterface<pageTask>> = [
  {
    url: 'home',
    component: new HomePage(),
  },
  {
    url: 'about',
    component: new AboutPage(),
  },
  {
    url: 'login',
    component: new LoginPage(),
    notMain: true,
  },
]
