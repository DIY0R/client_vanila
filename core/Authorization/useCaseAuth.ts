import { authorizationRepo } from './RepositoryInter'
import { returnLoginInterface } from './types/returnLoginInterface'

export class useCaseAuth {
  constructor(private auth: authorizationRepo) {}

  async login(name: string, email: string): Promise<returnLoginInterface> {
    const data = await this.auth.login(name, email)
    return data
  }
  get getIsAuth() {
    return this.auth.getIsAuth
  }
}
