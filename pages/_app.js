import '../styles/globals.css'
import Layout from '../components/layout.js/layout';
import './index.css'
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  return <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
