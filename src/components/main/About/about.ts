import { componentTask } from '../../../routes/routesInfo'

export class AboutPage implements componentTask {
  constructor() {}
  toHTML() {
    const div = document.createElement('div')
    div.innerHTML = `<h1>
     Hello About
     </h1>`
    return div
  }
}
