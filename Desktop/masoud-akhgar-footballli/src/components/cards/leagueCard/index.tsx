import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GameCard } from "@/components/cards";
import { LeagueLogo, LeagueTitle } from "./styled";

interface IFixture {
  api_id: number;
  archive_url: string | null;
  away: {
    api_id: number;
    id: number;
    is_favorite: boolean | null;
    logo: string;
    name: string;
  };
  away_goals: number | null;
  away_penalty_goals: number | null;
  elapsed: number;
  home: {
    api_id: number;
    id: number;
    is_favorite: boolean | null;
    logo: string;
    name: string;
  };
  home_goals: number | null;
  home_penalty_goals: number | null;
  id: string;
  live_url: string | null;
  start_time: string;
  status: string;
}

export const LeagueCard = ({
  logo,
  name,
  fixtures,
}: {
  logo: string;
  name: string;
  fixtures: IFixture[];
}) => {
  return (
    <Box marginBlock="15px">
      <Accordion
        disableGutters
        sx={{
          minWidth: "343px",
          maxWidth: { xs: "calc(100vw - 20px)", sm: "500px" },
          borderRadius: "10px !important",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderBottom: "1px solid #ebebeb",
          }}
        >
          <Box display="flex" alignItems="center">
            <LeagueLogo src={logo} />
            <LeagueTitle>{name}</LeagueTitle>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {fixtures.map((game: any) => (
            <GameCard
              key={game.api_id}
              away={game.away}
              home={game.home}
              start_time={game.start_time}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
