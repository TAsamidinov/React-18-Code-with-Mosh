import React from "react";

interface Props {
  game: {
    id: number;
    player: {
      name: string;
    };
  };
}
const Player = ({ game }: Props) => {
    return (
      <>
        <h2>Player ID: {game.id}</h2>
        <p>Player Name: {game.player.name}</p>
      </>
    );
  };

export default Player;
