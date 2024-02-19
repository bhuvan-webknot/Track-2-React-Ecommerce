import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Cards(props) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "100px" }}>
      <CardMedia
        className=" w-full cardClass object-cover rounded-t-md"
        component="img"
        height="170"
        image={props.imgLink}
        alt="girl-wearing-red-dress"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.desc}
        </Typography>

        <div className="flex justify-between">
          <Typography
            variant="h5"
            sx={{ margin: "20px 0" }}
            color="text.secondary"
          >
            ₹{props.price}
          </Typography>
          <Typography
            variant="h5"
            sx={{ margin: "20px 5px" }}
            color="text.secondary"
          >
            {props.size}
          </Typography>
        </div>
        <Button variant="outlined">Add to cart</Button>
      </CardContent>
    </Card>
  );
}
