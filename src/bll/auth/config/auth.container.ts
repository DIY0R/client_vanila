import { containerGLobalActions } from '../../../inversify.config';

import { AuthUseAdapter } from '../useAdapter';
import { AuthUseAdapterInterface, TYPESContainer } from './typesContainer';

containerGLobalActions.bindDynamicValue<AuthUseAdapterInterface>(
  AuthUseAdapter,
  TYPESContainer.authBll
);
