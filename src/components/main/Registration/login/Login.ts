import { pageTask } from '../../../../types/pageTask'
import '../style/login.css'
export class LoginPage implements pageTask {
  public style: string = 'login.css'
  toHTML(): HTMLElement {
    const div = document.createElement('div')
    div.innerHTML = `
     
    <div class="login">
         <h1>login</h1>
      </div>
     
    `
    return div
  }
}
