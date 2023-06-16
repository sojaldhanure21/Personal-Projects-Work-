import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import { faHotel } from "@fortawesome/free-solid-svg-icons";


export const CardItem = (props) => {
    return (
        <>
            <Card sx={{ maxWidth: "62vw", maxHeight: 270 }} id={props.hotel.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.hotel.heroImage}
                        alt="green iguana"
                    />
                    <div style={{height:"100px", textOverflow:"ellipsis", overflow:"hidden"}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        <div style={{textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}>
                            {props.hotel.name}
                            </div>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            
                            {props.hotel.address}
                            
                        </Typography>
                    </CardContent>
                    </div>
                </CardActionArea>
            </Card>
        </>
    )
}