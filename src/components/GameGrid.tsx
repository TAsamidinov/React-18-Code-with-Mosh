import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainers from "./GameCardContainers";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainers>
              {" "}
              <GameCardSkeleton key={skeleton} />{" "}
            </GameCardContainers>
          ))}
        {data.map((game) => (
          <GameCardContainers>
            <GameCard key={game.id} game={game} />
          </GameCardContainers>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
