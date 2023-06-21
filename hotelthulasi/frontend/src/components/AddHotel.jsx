import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddHotel = () => {
  let navigate = useNavigate();

  const [hotelData, setHotelData] = useState({
    hotel_name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    phone_number: "",
  });

  const {hotel_name, address, city , state, country, postal_code, phone_number } = hotelData;

  const handleData = (e) => {
    setHotelData((prevHotelData) => ({
      ...prevHotelData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(hotelData);
    await axios.post(`http://localhost:8080/addhotel`, hotelData);
    setHotelData({
      hotel_name: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postal_code: "",
      phone_number: "",
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
              label="hotel_name"
              name="hotel_name"
              value={hotel_name}
              onChange={handleData}
            />
            <TextField
              label="address"
              name="address"
              value={address}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="city"
              name="city"
              value={city}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="state"
              name="state"
              value={state}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="country"
              name="country"
              value={country}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="postal_code"
              name="postal_code"
              value={postal_code}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="phone_number"
              name="phone_number"
              value={phone_number}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained">
                Add Hotel
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

export default AddHotel