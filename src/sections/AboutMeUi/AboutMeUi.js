import CardComponent from '../../components/CardComponent/CardComponent';
import AboutTextPartComponent from '../../components/AboutTextPartComponent/AboutTextPartComponent';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  Container,
  Grid2,
  Stack,
  Typography,
  Button
} from '@mui/material';

export default function AboutMeUi() {
  return (
    <>
      <Container disableGutters sx={{ marginTop: 10 }}>
        <Grid2
          container
          spacing={2}
          padding={2}
          paddingTop={5}
          paddingBottom={5}
          borderTop={1}
          borderColor="#98AFC7"
          columns={{ sm: 8, md: 12 }}
        >
          {/* Typography Title About The Developer */}
          <Grid2 size={{ sm: 8, md: 7 }}>
            <AboutTextPartComponent />
          </Grid2>

          <Grid2 size={{ sm: 8, md: 5 }}>
            <Grid2 size={12} paddingRight={10} marginBottom={5}>
              <Typography
                variant="h3"
                align="end"
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                About
                <br />
                The Developer
              </Typography>
            </Grid2>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2
              }}
            >
              <CardComponent />
            </Stack>
            <Stack sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2
            }}>
              <Button
                sx={{
                  color: "#3b5998",
                  borderColor: "#3b5998",
                  padding: "10px",
                  boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => window.open("https://www.facebook.com/patorok456/")}
              >
                <FacebookIcon fontSize="large" />
              </Button>
              <Button
                sx={{
                  color: "#333",
                  borderColor: "#333",
                  padding: "10px",
                  boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => window.open("https://github.com/Patorok")}
              >
                <GitHubIcon fontSize="large" />
              </Button>
              <Button
                sx={{
                  color: "#C13584",
                  borderColor: "#C13584",
                  padding: "10px",
                  boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => window.open("https://www.instagram.com/zedge_pj/")}
              >
                <InstagramIcon fontSize="large" />
              </Button>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};
