import { returnLoginInterface } from './types/returnLoginInterface';

export interface authorizationRepo {
  get getIsAuth(): boolean;
  login(name: string, email: string): Promise<returnLoginInterface>;
  checkUser(token: string): Promise<boolean>;
}
