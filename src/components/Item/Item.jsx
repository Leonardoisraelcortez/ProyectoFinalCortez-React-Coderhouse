import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Item.css';

function Item(props) {
    const { id, title, img, price, description } = props;

    return (
    <Card className="item-card" sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to={`/product/${id}`}>
        <CardMedia className="item-image" component="img" height="140" image={img} alt="imagen" />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {description}
            </Typography>
            <Typography variant="h6" color="primary">
            $ {price}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    );
}

export default Item;