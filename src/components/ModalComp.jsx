import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let cnt = 0;
  let totalAmt = 0;
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <button onClick={handleOpen}>
        <ShoppingCartIcon
          sx={{
            cursor: "pointer",
            marginLeft: "40px",
            fontSize: "30px",
            padding: "0",
          }}
        />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.cartData.map((ele) => {
              totalAmt = totalAmt + parseInt(ele.price);
              return (
                <p>
                  {++cnt}.{ele.desc} - ₹{ele.price}
                </p>
              );
            })}
            <br /> --------Total--------- <br />₹{totalAmt}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
