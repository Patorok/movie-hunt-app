import popcorn from "../../assets/popcorn.png"
import { 
  CircularProgress, 
  Container,
  Typography,
  Box
} from "@mui/material";

export default function LoaderComponent() {
  return (
    <>
      <Container
        component="div"
        maxWidth="md"
        disableGutters
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5
        }}
      >
        <CircularProgress color="secondary" size="3.5em"/>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            marginTop: 1
          }}
        >
          <img src={popcorn} alt="...Loading" width={40} />
          <Typography component="p" color="primary" fontSize={20} textAlign="center">
            Grabbing your popcorn...
          </Typography>
          <img src={popcorn} alt="...Loading" width={40} />
        </Box>
      </Container>
    </>
  );
}
