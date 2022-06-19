import { Container } from 'inversify'
import 'reflect-metadata'
import { AuthUseAdapter, AuthUseAdapterInterface } from './bll/auth/useAdapter'

import { LoginPage } from './components/main/Registration/login/Login'
import { LoginActions } from './components/main/Registration/login/loginActions'
import { TYPESContainer } from './types'

const vanilaContainer = new Container()

vanilaContainer.bind<LoginPage>(TYPESContainer.loginPage).to(LoginPage)
vanilaContainer.bind<LoginActions>(TYPESContainer.loginActions).to(LoginActions)

vanilaContainer
  .bind<AuthUseAdapterInterface>(TYPESContainer.authBll)
  .toDynamicValue(() => AuthUseAdapter)
export { vanilaContainer }
