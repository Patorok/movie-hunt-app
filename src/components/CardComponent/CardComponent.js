import { useState } from 'react';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import profile from '../../assets/profile.png';
import posted from '../../assets/posted_pic.JPG';
import piano from "../../assets/piano.png"
import game from "../../assets/game-controller.png"
import basketball from "../../assets/basketball-ball.png"
import { 
  Box, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Collapse,
  IconButton,
  Typography,
  Avatar,
} from '@mui/material';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function CardComponent() {
  const [expanded, setExpanded] = useState(true);
  const [isClickFavIcon, setIsClickFavIcon] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickFavIcon = () => {
    setIsClickFavIcon(!isClickFavIcon);
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={profile}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Patrick Louise Jacinto"
        subheader={formattedDate}
      />
      <CardMedia
        component="img"
        height="300"
        image={posted}
        alt="posted"
        sx={{
          objectPosition: 'top'
        }}
      />
      <CardContent>
        <Typography variant="body2" align="justify" sx={{ color: 'text.secondary' }}>
          I’m a passionate web developer who loves showcasing
          my skills through exciting projects. I enjoy
          collaborating with others and continuously learning
          to enhance my craft.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleClickFavIcon}>
          <FavoriteIcon color={isClickFavIcon ? "error" : ""}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color="primary" fontWeight="bold" sx={{ marginBottom: 2 }}>Hobbies:</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              gap: 2
            }}
          >
            <img src={piano} alt="Piano" width={25} />
            <Typography align="justify" fontSize={14} sx={{ marginBottom: 2 }}>
              I enjoy playing the piano in my free time,
              exploring different melodies and improving my
              skills.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              gap: 2
            }}
          >
            <img src={game} alt="Game" width={25} />
            <Typography align="justify" fontSize={14} sx={{ marginBottom: 2 }}>
              I'm an PC and Console gamer, always on the lookout 
              for new adventures and challenges 
              in the gaming world.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              gap: 2
            }}
          >
            <img src={basketball} alt="Basketball" width={25} />
            <Typography align="justify" fontSize={14} sx={{ marginBottom: 2 }}>
              I also love playing basketball, whether it's 
              a casual game with friends or working 
              on my shots.
            </Typography>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}