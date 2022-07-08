import { Container } from 'inversify';
import 'reflect-metadata';
import {
  AuthUseAdapterInterface,
  TYPESContainerAuthBll,
} from './bll/auth/config/typesContainer';
import { AuthUseAdapter } from './bll/auth/useAdapter';
import { TYPESContainerRegister } from './components/main/Registration/config/typeContainer';
import { LoginPage } from './components/main/Registration/login/Login';
import { LoginActions } from './components/main/Registration/login/loginActions';

const vanilaContainer = new Container();

vanilaContainer
  .bind<LoginActions>(TYPESContainerRegister.loginActions)
  .to(LoginActions);
vanilaContainer.bind<LoginPage>(TYPESContainerRegister.loginPage).to(LoginPage);

vanilaContainer
  .bind<AuthUseAdapterInterface>(TYPESContainerAuthBll.authBll)
  .toDynamicValue(() => AuthUseAdapter);

class ContainerGLobalActions {
  public bind<T>(nature: new (...args: never[]) => T, token: symbol) {
    vanilaContainer.bind<T>(token).to(nature);
  }
  public bindDynamicValue<T>(nature: T, token: symbol) {
    vanilaContainer.bind<T>(token).toDynamicValue(() => nature);
  }
}
export const containerGLobalActions = new ContainerGLobalActions();

export { vanilaContainer };
