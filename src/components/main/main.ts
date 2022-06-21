import { RegisterListeners } from '../../routes/registerListeners'
import '../../bll/auth/config/auth.container'
import '../main/Registration/config/auth.container'

export class Main {
  constructor(private listener: RegisterListeners) {}

  toHTML() {
    const div = document.createElement('div')

    this.listener.registerEventsRoutes(div, document)
    div.innerHTML = `<a href='#main'>main</a>`
    return div
  }
}
