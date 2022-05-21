import { componentTask } from '../../../routes/routesInfo'

export class HomePage implements componentTask {
  constructor() {}
  toHTML() {
    const div = document.createElement('div')
    div.innerHTML = `<h1>
     Hello Home Page
     </h1>`
    return div
  }
}
