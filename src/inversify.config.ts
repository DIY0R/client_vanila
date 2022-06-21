import { Container, interfaces } from 'inversify'
import 'reflect-metadata'
import { AuthUseAdapterInterface } from './bll/auth/config/typesContainer'
import { AuthUseAdapter } from './bll/auth/useAdapter'
import { TYPESContainer } from './types'

const vanilaContainer = new Container()

class ContainerGLobalActions {
  public bind<T>(nature: new (...args: never[]) => T, token: symbol) {
    vanilaContainer.bind<T>(token).to(nature)
  }
  public bindDynamicValue<T>(nature: T, token: symbol) {
    vanilaContainer.bind<T>(token).toDynamicValue(() => nature)
  }
}
export const containerGLobalActions = new ContainerGLobalActions()

export { vanilaContainer }
