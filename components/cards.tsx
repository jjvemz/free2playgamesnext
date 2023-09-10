import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = (props: any) => {
        const {title, short_description, 
            thumbnail, genre, developer} = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={thumbnail}
      title={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {short_description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button>{genre}</Button>
      <Button>{developer}</Button>
    </CardActions>
  </Card>
);
  
}

export default Cards;