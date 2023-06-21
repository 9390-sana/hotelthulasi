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

export default function BasicTable1() {
  const [reservations, setReservations] = React.useState([]);

  const { reservation_id } = useParams();

  React.useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = async () => {
    const hotels = await axios.get("http://localhost:8080/getReservations");
    setReservations(reservations.data);
    console.log(reservations.data);
  };

  const deleteReservations = async (reservation_id) => {
    await axios.delete(`http://localhost:8080/reservation/${reservation_id}`);
    loadReservations();
  };
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Reservation_id</TableCell>
              <TableCell align="left">room_id</TableCell>
              <TableCell align="left">user_id</TableCell>
              <TableCell align="left">Check_in_date</TableCell>
              <TableCell align="left">Check_out_date</TableCell>
              <TableCell align="left">Num_guests</TableCell>
              <TableCell align="left">Total_cost</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map((reservations, index) => (
              <TableRow key={index}>
                <TableCell>{reservations.reservation_id}</TableCell>
                <TableCell>{reservations.room_id}</TableCell>
                <TableCell>{reservations.user_id}</TableCell>
                <TableCell>{reservations.check_in_date}</TableCell>
                <TableCell>{reservations.check_out_date}</TableCell>
                <TableCell>{reservations.num_guests}</TableCell>
                <TableCell>{reservations.total_cost}</TableCell>


                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    
                    <a href={`/UpdateReservations/${reservations.reservation_id}`}>
                      <Button style={{ borderRadius: 0 }}>Update</Button>
                    </a>

                    <Button
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      color="error"
                      onClick={() => deleteReservations(reservations.reservation_id)}
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