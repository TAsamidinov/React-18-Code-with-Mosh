import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack justifyContent="space-between" alignItems="start">
          <Heading
            fontSize="2xl"
            noOfLines={2}
            minHeight="3.6em" // ✅ Reserves space for exactly 2 lines
          >
            {game.name}
          </Heading>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
