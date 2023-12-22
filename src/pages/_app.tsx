import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { AppMain } from '@/components';
import { Provider } from '@/services/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Provider>
        <AppMain>
          <Component {...pageProps} />
        </AppMain>
      </Provider>
    </RecoilRoot>
  );
}
