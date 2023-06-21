import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup, Container } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BasicTable() {
  const [hotels, setHotels] = React.useState([]);

  const { hotel_id } = useParams();

  React.useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    const hotels = await axios.get("http://localhost:8080/getHotel");
    setHotels(hotels.data);
    console.log(hotels.data);
  };

  const deleteHotels = async (hotel_id) => {
    await axios.delete(`http://localhost:8080/hotel/${hotel_id}`);
    loadHotels();
  };
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Hotel_id</TableCell>
              <TableCell align="left">Hotel_name</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">city</TableCell>
              <TableCell align="left">State</TableCell>
              <TableCell align="left">Country</TableCell>
              <TableCell align="left">Postal_code</TableCell>
              <TableCell align="left">Phone_number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hotels.map((hotel, index) => (
              <TableRow key={index}>
                <TableCell>{hotel.hotel_id}</TableCell>
                <TableCell>{hotel.hotel_name}</TableCell>
                <TableCell>{hotel.address}</TableCell>
                <TableCell>{hotel.city}</TableCell>
                <TableCell>{hotel.state}</TableCell>
                <TableCell>{hotel.country}</TableCell>
                <TableCell>{hotel.postal_code}</TableCell>
                <TableCell>{hotel.phone_number}</TableCell>

                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    
                    <a href={`/UpdateHotel/${hotel.hotel_id}`}>
                      <Button style={{ borderRadius: 0 }}>Update</Button>
                    </a>

                    <Button
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      color="error"
                      onClick={() => deleteHotels(hotel.hotel_id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}