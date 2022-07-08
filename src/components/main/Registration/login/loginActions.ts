import { inject, injectable } from 'inversify';
import { returnLoginInterface } from '../../../../../core/Authorization/types/returnLoginInterface';
import {
  AuthUseAdapterInterface,
  TYPESContainer,
} from '../../../../bll/auth/config/typesContainer';

import { AuthUseAdapter } from '../../../../bll/auth/useAdapter';

@injectable()
export class LoginActions {
  constructor(
    @inject(TYPESContainer.authBll) private auth: AuthUseAdapterInterface
  ) {}

  private validate(div: HTMLElement, messages: Array<string>) {
    const messagesEl = div.querySelector('.messages');
    messagesEl.innerHTML = '';
    messages.forEach((message) => {
      messagesEl.innerHTML += `<li>${message}</li>`;
    });
  }

  login(div: HTMLElement, style: string) {
    const btn = div.querySelector(style);
    const formLogin: HTMLFormElement = div.querySelector('.form-login');

    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const { password, login } = formLogin;
      const user: returnLoginInterface = await this.auth.login(
        password.value,
        login.value
      );
      this.validate(div, user.messages);
    });
  }
}
