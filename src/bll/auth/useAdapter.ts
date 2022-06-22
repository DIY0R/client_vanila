import { Authorization } from '../../../core/Authorization/authorization'
import { returnLoginInterface } from '../../../core/Authorization/types/returnLoginInterface'
import { useCaseAuth } from '../../../core/Authorization/useCaseAuth'
import { AuthorizationRealization } from './authorization'

export const AuthUseAdapter = new useCaseAuth(
  new AuthorizationRealization(new Authorization())
)
