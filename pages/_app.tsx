import '../styles/globals.css'
import type { AppProps } from 'next/app';

//Redux
import { store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
       <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
