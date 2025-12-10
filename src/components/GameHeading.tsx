import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import { GameQuery } from '../App'

interface Props {
    gameQuery: GameQuery
}
const GameHeading = ({gameQuery}: Props) => {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;    return (
        <Heading marginBottom={4} fontSize={'5xl'} as={'h1'}> { heading } </Heading>
    )
}

export default GameHeading
