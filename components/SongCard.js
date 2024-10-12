// components/SongCard.js
import React from 'react';

const SongCard = ({ title, artist, albumCover }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={albumCover} alt={title} className="w-full h-32 rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600">{artist}</p>
    </div>
  );
};

export default SongCard;
