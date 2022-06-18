import { returnLoginInterface } from '../../../../../core/Authorization/types/returnLoginInterface'
import { AuthUseAdapterInterface } from '../../../../bll/auth/useAdapter'

export class LoginActions {
  constructor(private auth: AuthUseAdapterInterface) {}

  private validate(div: HTMLElement, messages: Array<string>) {
    const messagesEl = div.querySelector('.messages')
    messagesEl.innerHTML = ''
    messages.forEach((message) => {
      messagesEl.innerHTML += `<li>${message}</li>`
    })
  }

  login(div: HTMLElement, style: string) {
    const btn = div.querySelector(style)
    const formLogin: HTMLFormElement = div.querySelector('.form-login')

    btn.addEventListener('click', async (e) => {
      e.preventDefault()
      const { password, login } = formLogin
      const user: returnLoginInterface = await this.auth.login(
        password.value,
        login.value
      )
      this.validate(div, user.messages)
    })
  }
}
