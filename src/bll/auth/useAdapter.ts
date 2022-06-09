import { Authorization } from '../../../core/Authorization/authorization'
import { useCaseAuth } from '../../../core/Authorization/useCaseAuth'
import { AuthorizationRealization } from './authorization'

export const authUse = new useCaseAuth(
  new AuthorizationRealization(new Authorization())
)

class Auht {}
