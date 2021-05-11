import 'antd/dist/antd.css';
import GlobalLayout from '../components/ResetCss';
import Head from 'next/head';
import AppLayout from '../components/AppLayout/index';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';
const App = ({ Component, pageProps }) => {
  return (
    <GlobalLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </GlobalLayout>
  );
};

export default wrapper.withRedux(withReduxSaga(App));
