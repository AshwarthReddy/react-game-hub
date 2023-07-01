import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props{
    gameQuery : GameQuery;
}
const GameHeading = ({gameQuery}: Props) => {

    const platForm = gameQuery.platForm? gameQuery.platForm.name : '';
    const gennre = gameQuery.genre? gameQuery.genre.name : '';
    const heading = `${platForm} ${gennre} Games`;
    return (<Heading as='h1' fontSize='2xl' marginY={5}>{heading}</Heading>);

}

export default GameHeading;