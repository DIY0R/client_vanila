import { returnLoginInterface } from '../../../../core/Authorization/types/returnLoginInterface';

export interface AuthUseAdapterInterface {
  login(name: string, email: string): Promise<returnLoginInterface>;
  get getIsAuth(): boolean;
}
export const TYPESContainerAuthBll = {
  authBll: Symbol.for('authBll'),
};
