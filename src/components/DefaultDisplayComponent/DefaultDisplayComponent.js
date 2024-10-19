import defaultImage from "../../assets/default.png"
import popCorn from "../../assets/popcorn.png"
import videoPlayer from "../../assets/video-player.png"
import { Box, Container, Typography } from '@mui/material';

export default function DefaultDisplayComponent() {
  return (
    <>
      <Container
        component="div"
        maxWidth="md"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 5
        }}
      >
        <img src={defaultImage} alt="...Loading" width={500} />
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
          <img src={popCorn} alt="...Loading" width={40} />
          <Typography component="p" color="primary" fontSize={20} textAlign="center">
            Ready to hunt down your next must-watch movie? 
            <br/>
            Dive in and discover films that will keep you hooked!
          </Typography>
          <img src={videoPlayer} alt="...Loading" width={30} />
        </Box>
      </Container>
    </>
  );
}
