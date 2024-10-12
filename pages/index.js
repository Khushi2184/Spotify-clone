// pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout';
import SongCard from '../components/SongCard';

const songs = [
  {
    title: 'Song Title 1',
    artist: 'Artist 1',
    albumCover: 'https://via.placeholder.com/150',
  },
  {
    title: 'Song Title 2',
    artist: 'Artist 2',
    albumCover: 'https://via.placeholder.com/150',
  },
  // Add more songs here
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold">Welcome to Spotify Clone</h1>
      <p className="mt-4">Enjoy your music!</p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {songs.map((song, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            albumCover={song.albumCover}
          />
        ))}
      </div>
    </Layout>
  );
}
