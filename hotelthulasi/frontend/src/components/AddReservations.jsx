import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddReservations = () => {
  let navigate = useNavigate();

  const [reservationsData, setReservationsData] = useState({
    room_id: "",
    user_id: "",
    check_in_date: "",
    check_out_date: "",
    num_guests: "",
    total_cost: "",
    
  });

  const {room_id, user_id, check_in_date , check_out_date,num_guests ,  total_cost } = reservationsData;

  const handleData = (e) => {
    setReservationsData((prevReservationsData) => ({
      ...prevReservationsData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(reservationsData);
    await axios.post(`http://localhost:8080/addreservations`, reservationsData);
    setReservationsData({
        room_id: "",
        user_id: "",
        check_in_date: "",
        check_out_date: "",
        num_guests: "",
        total_cost: "",
    });
    navigate("/BasicTable");
  };

  return (
    <Container>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
           
            <TextField
              variant="outlined"
              label="room_id"
              name="room_id"
              value={room_id}
              onChange={handleData}
            />
            <TextField
              label="user_id"
              name="user_id"
              value={user_id}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="check_in_date"
              name="check_in_date"
              value={check_in_date}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="check_out_date"
              name="check_out_date"
              value={check_out_date}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="num_guests"
              name="num_guests"
              value={num_guests}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="total_cost"
              name="total_cost"
              value={total_cost}
              variant="outlined"
              onChange={handleData}
            />
           
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained">
                Add RESERVATIONS
              </Button>
              <Button href="/BasicTable" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddReservations