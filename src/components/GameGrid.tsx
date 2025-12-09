import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainers from "./GameCardContainers";
import { Genre } from "../hooks/useGenres";

interface GenreProps {
  selectedGenre: Genre | null;
}

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = ({ selectedGenre }: GenreProps) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainers key={skeleton}>
              {" "}
              <GameCardSkeleton  />{" "}
            </GameCardContainers>
          ))}
        {data.map((game) => (
          <GameCardContainers key={game.id}>
            <GameCard  game={game} />
          </GameCardContainers>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
