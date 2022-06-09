import { Authorization } from '../../../core/Authorization/authorization'
import { authorizationRepo } from '../../../core/Authorization/RepositoryInter'
import { returnLoginInterface } from '../../../core/Authorization/types/returnLoginInterface'

export class AuthorizationRealization implements authorizationRepo {
  constructor(private authorization: Authorization) {}

  get getIsAuth(): boolean {
    return this.authorization.getIsAuth
  }
  async login(name: string, email: string): Promise<returnLoginInterface> {
    const data = await this.authorization.login(name, email)
    return data
  }
}
