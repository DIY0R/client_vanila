import { pageTask } from '../../../types/pageTask';

export class AboutPage implements pageTask {
  constructor() {}
  toHTML() {
    const div = document.createElement('div');
    div.innerHTML = `<h1>
     Hello About
     </h1>`;
    return div;
  }
}
