import 'bulma/css/bulma.css';

import { ReactRelayContext } from 'react-relay'
import { useEnvironment } from '../lib/relay'
import { NavBar } from "../components/NavBar";

export default function App({ Component, pageProps }) {
  const environment = useEnvironment(pageProps.initialRecords)

  return (
    <ReactRelayContext.Provider value={{ environment, variables: {} }}>
      <header>
        <NavBar/>
      </header>
      <Component {...pageProps} />
    </ReactRelayContext.Provider>
  )
}
