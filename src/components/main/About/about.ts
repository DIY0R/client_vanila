import { componentTask } from '../../../routes/routesInfo'

export class AboutPage implements componentTask {
  constructor() {}
  toHTML() {
    return `<h1>
    Hello AboutPage
    </h1>`
  }
}
