import { pageTask } from '../../../types/pageTask';

export class HomePage implements pageTask {
  constructor() {}
  public style?: string = '';
  toHTML() {
    const div = document.createElement('div');
    div.innerHTML = `<h1>
     Hello Home Page
     </h1>`;
    return div;
  }
}
