import { componentTask } from '../types/componentTask';
import { pageTask } from '../types/pageTask';
import { routerInterface, routesInfo } from './routesInfo';

export class RegisterListeners {
  constructor(private routes: typeof routesInfo) {}

  registerEventsRoutes(div: HTMLElement, document: Document) {
    const style = document.getElementById('style');
    window.addEventListener('hashchange', (e) => {
      div.innerHTML = '';

      let route: routerInterface<pageTask> = this.routes.find(
        (route) => '/' + route.url == window.location.hash.slice(1)
      );
      const componentPage = route.component;

      div.append(componentPage.toHTML());
    });
    window.addEventListener('load', function (e) {
      window.location.hash = '';
    });
  }
}
