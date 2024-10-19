import leagueOfLegends from "../../assets/leagueOfLegends.jpg"
import valorant from "../../assets/valorant.jpg"
import dota2 from "../../assets/dota2.jpg"
import zeldaBreathOfWild from "../../assets/zelda.jpg"
import pokemonOmegaRuby from "../../assets/omegaRuby.jpg"
import redDeadRedemption2 from "../../assets/rdr2.jpg"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid2
} from "@mui/material";

export default function TopGamesComponent() {

  const games = [
    {
      title: "League of Legends",
      description: "A competitive online battle arena game where players fight in teams to destroy the enemy's Nexus.",
      image: leagueOfLegends
    },
    {
      title: "Valorant",
      description: "A tactical first-person shooter that combines precise gunplay with unique character abilities.",
      image: valorant
    },
    {
      title: "Dota 2",
      description: "A multiplayer online battle arena (MOBA) game where two teams compete to destroy each other's Ancient.",
      image: dota2
    }
  ];

  const consoleGames = [
    {
      title: "Zelda: Breath of the Wild",
      description: "An open-world action-adventure game where players explore the kingdom of Hyrule and battle enemies to rescue Princess Zelda.",
      image: zeldaBreathOfWild // Make sure to import the image appropriately
    },
    {
      title: "Pokémon Omega Ruby",
      description: "A role-playing game that follows trainers as they explore the Hoenn region and catch Pokémon to battle and compete.",
      image: pokemonOmegaRuby // Make sure to import the image appropriately
    },
    {
      title: "Red Dead Redemption 2",
      description: "An epic tale of life in America’s unforgiving heartland, featuring a sprawling open world and a gripping story.",
      image: redDeadRedemption2 // Make sure to import the image appropriately
    }
  ];
  

  return (
    <>
      <Grid2
        container
        marginTop={5}
        spacing={2}
        columns={{
          xs: 4,
          md: 12
        }}
      >
        {/* Typography Top PC Games I play */}
        <Grid2 item size={{xs: 12, md: 12}}>
          <Typography align="start" variant="h5" gutterBottom>
            Top PC Games I play:
          </Typography>
        </Grid2>
        {games.map((game) => (
          <Grid2 item size={{xs: 4, md: 4}} key={game.title}>
            <Card sx={{
              height: "100%"
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={game.image}
                  alt={game.title}
                />
                <CardContent>
                  <Typography align="center" gutterBottom variant="h6" component="div">
                    {game.title}
                  </Typography>
                  <Typography align="center" variant="body2" sx={{ color: 'text.secondary' }}>
                    {game.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
        <Grid2 item size={{xs: 12, md: 12}}>
          <Typography align="start" variant="h5" gutterBottom>
            Top Console Games I play:
          </Typography>
        </Grid2>
        {consoleGames.map((game) => (
          <Grid2 item size={{xs: 4, md: 4}} key={game.title}>
            <Card sx={{
              height: "100%"
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={game.image}
                  alt={game.title}
                />
                <CardContent>
                  <Typography align="center" gutterBottom variant="h6" component="div">
                    {game.title}
                  </Typography>
                  <Typography align="center" variant="body2" sx={{ color: 'text.secondary' }}>
                    {game.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
