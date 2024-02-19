import React, { useState } from "react";
import "./App.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/system";
import { TextField } from "@mui/material";
import Sizefilter from "./components/Sizefilter";
import Cards from "./components/Cards";
import Grid from "@mui/material/Grid";
import data from "./data";

function App() {
  const [totalProductsinCart, setTotalProductsinCart] = useState(0);
  
  return (
    <React.Fragment>
      <Container id="products">
        <div className="flex flex-row align-middle justify-start">
          <TextField
            label="Search Products"
            variant="standard"
            className="w-full"
            sx={{ margin: "0px;" }}
          />
          <ShoppingCartIcon
            sx={{
              cursor: "pointer",
              marginLeft: "40px",
              fontSize: "30px",
              padding: "0",
            }}
          />
          <span className="cursor-pointer">{totalProductsinCart}</span>
        </div>
        <Sizefilter />
        <Grid
          container
          spacing={2}
          className="flex justify-center align-middle"
        >
          {data.map((ele) => (
            <Grid item sm={12} md={6} lg={4}>
              <Cards
                key={ele.id}
                imgLink={ele.imgLink}
                desc={ele.productDescription}
                price={ele.price}
                size={ele.size}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
