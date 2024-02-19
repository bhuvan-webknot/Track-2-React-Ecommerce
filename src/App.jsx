import React, { useState } from "react";
import "./App.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/system";
import { Button, TextField } from "@mui/material";
import Sizefilter from "./components/Sizefilter";
import Cards from "./components/Cards";
import Grid from "@mui/material/Grid";
import data from "./data";
import ModalComp from "./components/ModalComp";

function App() {
  const [totalProductsinCart, setTotalProductsinCart] = useState(0);
  const [cartProductList, setCartProductList] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(data);

  const updateMyCartList = (newEle) => {
    setTotalProductsinCart(totalProductsinCart + 1);
    setCartProductList((prev) => [...prev, newEle]);
  };

  const filterOnBasisOfSize = (newSize) => {
    const filteredItems = data.filter(
      (data) => data.size.toLowerCase() == newSize.toLowerCase()
    );
    setFilteredUsers(filteredItems);
    console.log(filteredItems);
  };
  return (
    <React.Fragment>
      <Container id="products">
        <div className="flex flex-row align-middle justify-start">
          <TextField
            label="Search Products"
            variant="standard"
            className="w-full"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              const filteredItems = data.filter((data) =>
                data.productDescription
                  .toLowerCase()
                  .includes(query.toLowerCase())
              );
              setFilteredUsers(filteredItems);
            }}
            sx={{ margin: "0px;" }}
          />

          <ModalComp openModal={true} cartData={cartProductList} />
          <span className="cursor-pointer">{totalProductsinCart}</span>
        </div>

        <Sizefilter retSize={filterOnBasisOfSize} />
        <Grid
          container
          spacing={2}
          className="flex justify-center align-middle"
        >
          {filteredUsers.map((ele) => (
            <Grid item sm={12} md={6} lg={4}>
              <Cards
                key={ele.id}
                id={ele.id}
                imgLink={ele.imgLink}
                desc={ele.productDescription}
                price={ele.price}
                size={ele.size}
                updateProductList={updateMyCartList}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
