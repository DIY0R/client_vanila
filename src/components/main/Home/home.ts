import { componentTask } from '../../../routes/routesInfo'

export class HomePage implements componentTask {
  constructor() {}
  toHTML() {
    return `<h1>
    Hello Home Page
    </h1>`
  }
}
