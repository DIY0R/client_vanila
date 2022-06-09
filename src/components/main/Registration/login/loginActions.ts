import { authUse } from '../../../../bll/auth/useAdapter'
type authInter = typeof authUse
export class LoginActions {
  constructor(private auth: authInter) {}
  login(div: HTMLElement, style: string) {
    const btn = div.querySelector(style)
    console.log(btn)
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      this.auth.login('diyor', 'Julianne.OConner@kory.org')
    })
  }
}
