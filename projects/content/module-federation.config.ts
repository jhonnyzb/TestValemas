import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'content',
  remotes: ['look-and-feel'],
};

export default config;
