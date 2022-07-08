import { componentTask } from '../types/componentTask';

export class App {
  constructor(
    private classElement: string,
    private componets: Array<componentTask>
  ) {}

  render() {
    const div = document.querySelector(this.classElement);
    this.componets.forEach((renderComponent) => {
      div.appendChild(renderComponent.toHTML());
    });
  }
}
