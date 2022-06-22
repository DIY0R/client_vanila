import { containerGLobalActions } from '../../../../inversify.config'
import { LoginPage } from '../login/Login'
import { LoginActions } from '../login/loginActions'
import { TYPESContainer } from './typeContainer'

containerGLobalActions.bind<LoginActions>(
  LoginActions,
  TYPESContainer.loginActions
)
containerGLobalActions.bind<LoginPage>(LoginPage, TYPESContainer.loginPage)
