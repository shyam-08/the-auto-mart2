// const express= require("express");
// const router =express.router;
// const fetchUser=require('../middleware/fetchUser')
// // const Notes=require('..models/Notes')

// // route:1 fetch all contacts using post api/auth/FetchAllContact. no login reqiured
// router.post("/fetchAllcontact",fetchUser,async(req,res)=>{
// const contact = contact.find({name:req.name.id});
// res.json(contact);
// })

// // Route 2:Add a new contact using post "api/auth/addcontact" .login required
// router.post ('/addcontact',fetchname,[
//     body('name','Enter a valid name').islength({min:3}),
//     body('number','number must be atleast 10 digits').islength ({min:10}),

// ],async(req,res)=>{
// // if there are errors,return bad request and the errors
// const errors=validationResult(req);
// if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array()});
// }
// res.json(contacts)

// })
// // Route:3 Edit an exiting contact using post "/api/auth/editcontact".login reqired
// router.put("/editcontact/:id",fetchuser,async(req,res)=>{
//     const {name,email,number }=req.body;
//     // create  a newcontact Object
//     const newcontact={};
//     if(id){newcontact.id=title};
//     if(email){newcontact.email=email};
//     if(number){newcontact.number=number};
    
//     // find the contact to be edit and update it 
//     const contact=contact.findById(req.params.id);
//     if(!contact){return res.status(404).send("Not found")}
    
//     if(contact.name.toString()!==req.user.id){
//         return res.status(401).send("Not Allowed")
//     }
// })
import React, { useEffect, useState } from "react";
import { Select, MenuItem, Box, Input,Button } from "@mui/material";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@mui/material/TablePagination";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  doc,
  updateDoc,
  where,
  Timestamp,
} from "firebase/firestore";

const Drivers = () => {
  const [tableData, setTableData] = useState([]);
  const [statusMap, setStatusMap] = useState({});
  const [genderFilter, setGenderFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pg, setpg] = React.useState(0);
  const [rpg, setrpg] = React.useState(5);
  let sNo = 1;

  useEffect(() => {
    fetchData();
  }, [genderFilter, statusFilter, startDate, endDate]);

  const handleChangePage = (event, newpage) => {
    setpg(newpage);
  };

  const handleChangeRowsPerPage = (event) => {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  };

  const fetchData = async () => {
    const db = getFirestore();
    let q = collection(db, "drivers");

    if (genderFilter !== "all") {
      q = query(q, where("gender", "==", genderFilter));
    }

    if (statusFilter !== "all") {
      q = query(q, where("documentStatus", "==", statusFilter));
    }

    if (startDate && endDate) {
      // Create Firestore Timestamps from the selected dates
      const startTimestamp = Timestamp.fromDate(new Date(startDate));
      const endTimestamp = Timestamp.fromDate(new Date(endDate));

      // Use Firestore Timestamps for the query
      q = query(q, where("timestamp", ">=", startTimestamp));
      q = query(q, where("timestamp", "<=", endTimestamp));
    }

    try {
      const querySnapshot = await getDocs(q);
      const data = [];

      querySnapshot.forEach((doc) => {
        const { name, phoneNumber, email, gender, documentStatus, timestamp } =
          doc.data();
        data.push({
          id: doc.id,
          name,
          phoneNumber,
          email,
          gender,
          documentStatus,
          timestamp,
        });
      });

      setTableData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };
  const handleStatusChange = async (event, driverId) => {
    const newStatus = event.target.value;

    const db = getFirestore();
    const docRef = doc(db, "drivers", driverId);

    try {
      await updateDoc(docRef, { documentStatus: newStatus });
      setStatusMap((prevStatusMap) => ({
        ...prevStatusMap,
        [driverId]: newStatus,
      }));
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

   // Function to reset the timestamp filter
   const handleResetTimestampFilter = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <>
      <h2>Drivers</h2>
      <Paper>
        <TableContainer component={Paper}>
          <div style={{ display: "flex" }}>
            <Box>
              <label>Filter by Gender:</label>
              <Select
                value={genderFilter}
                onChange={handleGenderFilterChange}
                size="small"
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </Box>
            &nbsp;&nbsp;
            <Box>
              <label>Filter by Status:</label>
              <Select
                value={statusFilter}
                onChange={handleStatusFilterChange}
                size="small"
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="verified">Verified</MenuItem>
                <MenuItem value="unverified">Unverified</MenuItem>
              </Select>
            </Box>
            &nbsp;&nbsp;
            <Box sx={{ margin: "5px" }}>
              <label>Filter by Timestamp:</label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Button variant="contained"size="small" onClick={handleResetTimestampFilter}>
                Reset
              </Button>
            </Box>
          </div>
          <h4 style={{ fontFamily: "sans-serif", fontWeight: "5" }}>
            TOTAL COUNT OF DRIVERS:-{tableData.length}
          </h4>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.NO.</TableCell>
                <TableCell>Driver Name</TableCell>
                <TableCell>PhoneNo.</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>M/F</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {sNo++}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>
                    <Select
                      value={statusMap[row.id] || row.documentStatus}
                      onChange={(e) => handleStatusChange(e, row.id)}
                    >
                      <MenuItem value="verified">Verified</MenuItem>
                      <MenuItem value="unverified">Unverified</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rpg}
          page={pg}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Drivers;
