import { 
  AppBar, 
  CssBaseline, 
  Toolbar, 
  Typography
} from "@mui/material";
import videoPlayer from "../../assets/video-player.png"

export default function HeaderComponent() {
  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <img src={videoPlayer} alt="...Loading" width={25} />
          <Typography variant="h6" marginLeft={1} marginRight={1} fontSize={25}>
            Movie Hunt!
          </Typography>
          <img src={videoPlayer} alt="...Loading" width={25} />
        </Toolbar>
      </AppBar>
    </>
  );
}
