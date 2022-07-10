import { returnLoginInterface } from './types/returnLoginInterface';

const api = 'https://jsonplaceholder.typicode.com';

export class Authorization {
  private isAuth = false;

  private async checkUserEmail(email: string) {
    const res = await fetch(api + `/users?email=${email}`);
    const user = (await res.json())[0];
    return user;
  }
  public get getIsAuth(): boolean {
    return this.isAuth;
  }
  public async checkUser(toke: string): Promise<boolean> {
    const user = await this.checkUserEmail(toke);
    if (user) this.isAuth = true;
    return this.isAuth;
  }

  public async login(
    name: string,
    email: string
  ): Promise<returnLoginInterface> {
    const user = await this.checkUserEmail(email);
    this.isAuth = false;
    if (user) {
      this.isAuth = true;
      return { isAuth: this.getIsAuth, messages: [] };
    }
    return { isAuth: this.getIsAuth, messages: ['ERROR! could not find'] };
  }
}
