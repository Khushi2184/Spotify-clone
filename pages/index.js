// pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold">Welcome to Spotify Clone</h1>
      <p className="mt-4">Enjoy your music!</p>
    </Layout>
  );
}
