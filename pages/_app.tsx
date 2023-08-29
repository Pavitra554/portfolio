import '../styles/globals.css'
import type { AppProps } from 'next/app';

//Redux
import {Provider} from 'react-redux';
import { store } from '../store/store';

//vercel analytics
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
      <Analytics/>
    </Provider>
  )
}

export default MyApp
