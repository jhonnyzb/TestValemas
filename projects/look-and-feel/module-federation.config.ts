import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'look-and-feel',
  exposes: {
    './Routes': 'projects/look-and-feel/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
