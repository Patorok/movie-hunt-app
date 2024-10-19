import DefaultDisplayComponent from '../DefaultDisplayComponent/DefaultDisplayComponent';
import releasedIcon from "../../assets/releaseDate.png";
import genre from "../../assets/genre.png";
import rating from "../../assets/rate.png";
import synopsis from "../../assets/contract.png";
import director from "../../assets/director.png";
import actors from "../../assets/star.png";
import metascore from "../../assets/speedometer.png";
import tomato from "../../assets/tomato.png";
import { 
  Box, 
  Container, 
  Grid2, 
  Link, 
  Stack, 
  Typography
} from '@mui/material';
import LoaderComponent from '../LoaderComponent/LoaderComponent';


export default function MovieDisplayComponent({movie, loading, trailerLink, isMediumUp}) {

  if (loading) {
    return <LoaderComponent/>
  }

  if (!movie || !movie.Title) {
    return <DefaultDisplayComponent />;
  }

  const getNames = (names) => {
    const nameList = typeof names === "string" ? names.split(",") : [];

    return nameList.map((name, index) => {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(name)}`;
      return (
        <Link
          key={index}
          component="button"
          variant="body2"
          fontSize={16}
          onClick={() => window.open(searchUrl, "_blank")}
        >
          {name}
        </Link>
      );
    })
  }

  const rottenTomatoesRating = (ratings) => {
    const rating = ratings.find(rating => rating.Source === "Rotten Tomatoes");
    return rating ? rating.Value : "No Rate Found"
  }
  
  return (
    <>
      <Container
        component="div"
        disableGutters
        maxWidth="md"
        sx={{
          marginTop: 5
        }}
      >
        <Grid2
          container
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid2 size={{ xs: 4, sm: 8, md: 4 }}>
            <Box 
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img 
                src={movie.Poster} 
                alt={`${movie.Title} Poster`}
                style={{
                  width: isMediumUp ? '100%' : '300px',
                }}
              />
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 4, sm: 8, md: 8 }}>
            <Box component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }} 
            >
              <Typography 
                variant="h4" 
                textAlign="center" 
                fontWeight={700} 
                color="primary"
                marginBottom={2}
              >
                {movie.Title}
              </Typography>
              <Box
                component="div"
                sx={{
                  width: '100%',
                  height: '100%',
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 2
                }}
              >
                <iframe
                  title={movie.Title}
                  width={isMediumUp ? "560" : "100%"}
                  height={isMediumUp ? "315" : "450"}
                  src={trailerLink}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 4, sm: 8, md: 12 }}>
            <Box component="div" 
            > 
              <Grid2 
                container
                columns={{sm:8, md:12}}
              >
                <Grid2 size={{ sm: 8, md: 6 }}>
                  <Stack spacing={1}>
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        gap: 1
                      }}
                    >
                      <div>
                        <img src={releasedIcon} alt="date icon" width={20} />
                      </div>
                      <strong>Released Date: </strong>
                      <Typography color="primary">
                        {movie.Released}
                      </Typography>
                    </Box>

                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        gap: 1
                      }}
                    >
                      <div>
                        <img src={genre} alt="date icon" width={20} />
                      </div>
                      <strong>Genre: </strong>
                      <Typography color="primary">
                        {movie.Genre}
                      </Typography>
                    </Box>

                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        gap: 1
                      }}
                    >
                      <div>
                        <img src={director} alt="date icon" width={20} />
                      </div>
                      <strong>Director: </strong>
                      {getNames(movie.Director)}
                    </Box>

                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        flexWrap: "wrap",
                        gap: 1
                      }}
                    >
                      <div>
                        <img src={actors} alt="date icon" width={20} />
                      </div>
                      <strong>Actors: </strong>
                      {getNames(movie.Actors)}
                    </Box>

                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: 1
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          gap: 1
                        }}
                      >
                        <div>
                          <img src={tomato} alt="date icon" width={20} />
                        </div>
                        <strong>Rotten Tomatoes: </strong>
                        <Typography color="success" align="justify" fontWeight="bold">
                          {rottenTomatoesRating(movie.Ratings)}
                        </Typography>
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          gap: 1
                        }}
                      >
                        <div>
                          <img src={metascore} alt="date icon" width={20} />
                        </div>
                        <strong>Metacritic: </strong>
                        <Typography color="success" align="justify" fontWeight="bold">
                          {movie.Metascore}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        gap: 1
                      }}
                    >
                      <div>
                        <img src={rating} alt="date icon" width={20} />
                      </div>
                      <strong>imdbRating: </strong>
                      <Typography color="success" align="justify" fontWeight="bold">
                        {movie.imdbRating}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid2>

                <Grid2 size={{ sm: 8, md: 6 }}>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      gap: 1
                    }}
                  >
                    <div>
                      <img src={synopsis} alt="date icon" width={20} />
                    </div>
                    <Typography color="primary" align="justify">
                      <strong>Synopsis: </strong>{movie.Plot}
                    </Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
