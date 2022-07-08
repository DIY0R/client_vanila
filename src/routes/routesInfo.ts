import { AboutPage } from '../components/main/About/about';
import { HomePage } from '../components/main/Home/home';
import { pageTask } from '../types/pageTask';
import { componentTask } from '../types/componentTask';
import { vanilaContainer } from '../inversify.config';
import { TYPESContainerRegister } from '../components/main/Registration/config/typeContainer';

export interface routerInterface<T = componentTask> {
  url: string;
  component: T;
  notMain?: boolean;
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
    component: vanilaContainer.get(TYPESContainerRegister.loginPage),
    notMain: true,
  },
];
