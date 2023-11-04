import { Container } from "./styled";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import PersonIcon from "@mui/icons-material/Person";

export const NavBar = () => {
  return (
    <Container component="nav">
      <ul>
        <li>
          <PersonIcon color="disabled" />
        </li>
        <li>
          <EmojiEventsRoundedIcon color="disabled" />
        </li>
        <li>
          <ExploreRoundedIcon color="disabled" />
        </li>
        <li>
          <SportsSoccerRoundedIcon color="success" />
        </li>
      </ul>
    </Container>
  );
};
