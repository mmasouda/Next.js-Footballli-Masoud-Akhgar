import { Typography, TextField } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { Container, HeaderBox, SearchBarBox, SearchBar } from "./styled";

const strings = {
  liveScore: "نتایج زنده",
  searchBarPlaceHolder: "جستجو...",
};

export const Header = () => {
  return (
    <Container component="header">
      <HeaderBox>
        <Typography variant="h5">{strings.liveScore}</Typography>
        <AccessTimeRoundedIcon fontSize="large" />
      </HeaderBox>
      <SearchBarBox>
        <SearchBar type="search" placeholder="&#x2315; جستجو..." />
      </SearchBarBox>
    </Container>
  );
};
