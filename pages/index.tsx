import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ruuvi2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="w-full sm:w-11/12 ml-auto mr-auto">
          <Header />
          <p>TGESXT</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
