import SearchComponent from "../../components/SearchComponent/SearchComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import MovieDisplayComponent from "../../components/MovieDisplayComponent/MovieDisplayComponent";
import SnackBarComponent from "../../components/SnackbarComponent/SnackBarComponent";
import useGetMovie from "../../hooks/useGetMovie";
import { Container, Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import searchMovie from "../../assets/search-movie.png"
import cinemaGlass from "../../assets/3d-glasess.png"

export default function MovieUi() {
  const { 
    movie, 
    trailerLink, 
    loading, 
    errorMessage, 
    successMessage, 
    openSnackbar,
    handleSnackBarClose,
    getMovie 
  } = useGetMovie();

  const isMediumUp = useMediaQuery(useTheme().breakpoints.up('md'));

  return (
    <>
      <HeaderComponent />
      <Container maxWidth="md">
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 1,
            gap: 1
          }}
        >
          <Typography variant="h3" align="center" color="primary" marginTop={3} gutterBottom>
            Search Movies
          </Typography>
          <img src={searchMovie} alt="...Loading" width={48} />
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 1,
            marginBottom: 3,
            gap: 3
          }}
        >
          <img src={cinemaGlass} alt="...Loading" width={80} />
          <Typography variant="h5" align="center" color="secondary" paragraph>
            Welcome to Movie Hunt! Discover your
            favorite films and explore all the
            details you love. Find movie synopsis,
            posters, and more with just a search.
          </Typography>
          <img src={cinemaGlass} alt="...Loading" width={80} />
        </Box>
      </Container>
      <SearchComponent getMovie={getMovie} isMediumUp={isMediumUp}/>
      <MovieDisplayComponent 
        movie={movie} 
        loading={loading}
        trailerLink={trailerLink}
        isMediumUp={isMediumUp}
      />
      <SnackBarComponent
        openSnackbar={openSnackbar}
        handleSnackBarClose={handleSnackBarClose}
        message={errorMessage ? errorMessage : successMessage}
        color={errorMessage ? "error" : "success"}
      />
    </>
  );
}
