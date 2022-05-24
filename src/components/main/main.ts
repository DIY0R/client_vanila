import { RegisterListeners } from '../../routes/registerListeners'
export class Main {
  constructor(private listener: RegisterListeners) {}

  toHTML() {
    const div = document.createElement('div')

    this.listener.registerEventsRoutes(div, document)
    div.innerHTML = `<a href='#main'>main</a>`
    return div
  }
}
