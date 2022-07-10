import { authorizationRepo } from './RepositoryInter';
import { returnLoginInterface } from './types/returnLoginInterface';

export class useCaseAuth {
  constructor(private auth: authorizationRepo) {}

  public async login(
    name: string,
    email: string
  ): Promise<returnLoginInterface> {
    const data = await this.auth.login(name, email);
    return data;
  }
  get getIsAuth(): boolean {
    return this.auth.getIsAuth;
  }
  public async checkUser(token: string): Promise<boolean> {
    const statusAuth = await this.auth.checkUser(token);
    return statusAuth;
  }
}
