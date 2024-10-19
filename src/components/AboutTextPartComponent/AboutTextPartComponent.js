import BoltIcon from '@mui/icons-material/Bolt';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import earth from "../../assets/earth.png"
import { 
  Box, 
  Typography,
  Stack
} from '@mui/material';
import TopGamesComponent from '../TopGamesComponent/TopGamesComponent';

export default function AboutTextPartComponent() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 2
        }}
      >
        <Typography sx={{
          fontSize: 20,
          fontWeight: 100,
          letterSpacing: 4
        }}>
          WELCOME TO MY WORLD
        </Typography>
        <img src={earth} alt="Earth" width={30} />
      </Box>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          marginTop: 1,
          gap: 2
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Hi, I'm
        </Typography>
        <Typography variant="h3" fontWeight="bold" color="secondary">
          Patrick Jacinto
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          marginTop: 1,
          gap: 2
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          a
        </Typography>
        <Typography
          variant="h3"
          fontWeight="bold"
          color="secondary"
          borderRight={2}
          borderColor="#002D62"
        >
          Web Dev
        </Typography>
        <Typography
          component="p"
          fontSize={18}
          fontWeight={"bold"}
          color="warning"
        >
          Let's build something
          <br />
          amazing together.
        </Typography>
      </Stack>
      
      <Typography
        component="p"
        fontSize={16}
        color="secondary"
        align="justify"
        marginTop={5}
        letterSpacing={1}
        maxWidth={580}
      >
        <BoltIcon color="warning" />
        <CatchingPokemonIcon color="error" />
        <br />
        Aspiring web developer who loves building fast,
        functional websites. I'm a simple man who loves
        Pokémon at this age. Always eager to learn and
        take on new challenges.
      </Typography>
      <TopGamesComponent/>
    </>
  );
}
