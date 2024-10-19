import React from 'react'
import { 
  Box, 
  Button, 
  TextField, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  Select, 
  Grid2, 
  Container
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import useGetMovie from '../../hooks/useGetMovie';

export default function SearchComponent({getMovie, isMediumUp}) {
  const [plot, setPlot] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");

  function handleSearchSubmit(event) {
    event.preventDefault();

    if (plot === "short") {
      getMovie(title, year, "")
    } else {
      getMovie(title, year, plot)
    }

    setTitle("");
    setYear("");
    setPlot("");
  }

  return (
    <>
      <Container 
        component="div" 
        disableGutters
        maxWidth="md"
      >
        <Box
          component="form"
          disableGutters
          autoComplete="off"
          onSubmit={handleSearchSubmit}
        >
          <Grid2 
            container
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid2 size={{xs: 4, sm: 8, md: 5}}>
              <TextField
                fullWidth
                required
                label="Title"
                value={title}
                placeholder="Search Movie"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid2>
            <Grid2 size={{xs: 4, sm: 4, md: 3}}>
              <TextField
                fullWidth
                label="Year"
                value={year}
                placeholder="Enter Year"
                onChange={(e) => setYear(e.target.value)}
              />
            </Grid2>
            <Grid2 size={{xs: 4, sm: 4, md: 3 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Plot</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={plot}
                  label="Plot"
                  onChange={(e) => setPlot(e.target.value)}
                >
                  <MenuItem value="short">Short</MenuItem>
                  <MenuItem value="full">Full</MenuItem>
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 size={{xs: 4, sm: 8, md: 1 }}>
              <Button 
                fullWidth 
                type="submit" 
                variant="contained"
                sx={{height: "100%"}}
              >
                {isMediumUp ? <SearchIcon fontSize="medium" /> : 'Search'}
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );    
}