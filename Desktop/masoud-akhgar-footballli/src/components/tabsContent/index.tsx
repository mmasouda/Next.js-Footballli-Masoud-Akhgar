import useSWR from "swr";
import { Box, Typography } from "@mui/material";
import { LeagueCard } from "@/components/cards";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const TabContent = ({ date }: { date: string }) => {
  const data = useSWR(
    `https://core-sport-api.zarebin.ir/api/football/fixtures/?date=${date}`,
    fetcher
  );

  if (!data?.data?.all) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box>
      {data?.data?.all?.map((league: any) => (
        <LeagueCard
          key={league.api_id}
          logo={league.logo}
          name={league.name}
          fixtures={league.fixtures}
        />
      ))}
    </Box>
  );
};
