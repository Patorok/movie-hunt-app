import { useState } from "react";
import { axiosMovieClient, axiosYoutubeClient, YT_API_KEY, API_KEY } from "../utils/axiosClient"

const useGetMovie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [trailerLink, setTrailerLink] = useState("");

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const getMovie = (title, year, plot) => {
    setLoading(true);

    const params = new URLSearchParams();
    params.append('t', title);

    if (year !== "") {
      params.append('y', year);
    }

    if (plot !== "") {
      params.append('plot', plot);
    }

    params.append('apikey', API_KEY);

    axiosMovieClient.get(`?${params.toString()}`).then(
      (response) => {
        if (response.data.Response === "False") {
          setErrorMessage(response.data.Error);
          setMovie({});
        } else {
          const ytParams = new URLSearchParams();
          ytParams.append("key",YT_API_KEY);
          ytParams.append("q", `${response.data.Title} trailer`)
          ytParams.append("type", "video")
          ytParams.append("part", "snippet")

          axiosYoutubeClient.get(`search?${ytParams.toString()}`).then((result) => {
            if (result.data.items && result.data.items.length > 0) {
              setTrailerLink(`https://www.youtube.com/embed/${result.data.items[0].id.videoId}`);
              setSuccessMessage(`The Movie ${response.data.Title} loaded successfully`);
              setErrorMessage(null);
            } else {
              setErrorMessage(`No trailer found for ${response.data.Title}`);
            }
            setMovie(response.data);
          }).catch((ytError) => {
            setErrorMessage("Error fetching trailer from YouTube API");
            console.error(ytError);
          });
        }
      }
    ).catch((omdbError) => {
      setErrorMessage("Error fetching movie data from OMDB API");
      console.error(omdbError);
    }).finally(() => {
      setTimeout(() => {
        setLoading(false);
        setOpenSnackbar(true);
      }, 1500);
    })
  };

  return {
    movie,
    loading,
    errorMessage,
    successMessage,
    trailerLink,
    openSnackbar,
    handleSnackBarClose,
    getMovie,
  };
};

export default useGetMovie;