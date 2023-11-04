import { Typography } from "@mui/material";
import { Container, Team, ClubLogo } from "./styled";

interface ITeam {
  logo: string;
  id: number;
  api_id: number;
  is_favorite: boolean | null;
  name: string;
}

export const GameCard = ({
  away,
  home,
  start_time,
}: {
  away: ITeam;
  home: ITeam;
  start_time: string;
}) => {
  return (
    <Container>
      <Team justifyContent="end">
        <Typography paddingInline="8px">{away?.name}</Typography>
        <ClubLogo src={away?.logo} />
      </Team>
      <Typography width="40.8px" paddingInline="8px">
        {start_time?.slice(11, 16)}
      </Typography>
      <Team justifyContent="initial">
        <ClubLogo src={home?.logo} />
        <Typography paddingInline="8px">{home?.name}</Typography>
      </Team>
    </Container>
  );
};
