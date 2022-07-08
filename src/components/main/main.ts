import { RegisterListeners } from '../../routes/registerListeners';

import { componentTask } from '../../types/componentTask';

export class Main implements componentTask {
  constructor(private listener: RegisterListeners) {}

  toHTML() {
    const div = document.createElement('div');

    this.listener.registerEventsRoutes(div, document);
    div.innerHTML = `<a href='#main'>main</a>`;
    return div;
  }
}
