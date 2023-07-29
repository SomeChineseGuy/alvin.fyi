import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alvin = O</title>
        <meta name='description' content="Alvin's portfolio site" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default Home;
