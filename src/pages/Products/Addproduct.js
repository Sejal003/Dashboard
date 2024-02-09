import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Typography, Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { db } from "../../firrebase-config";
import { useAppStore } from '../../AppStore';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import Swal from 'sweetalert2';

const Addproduct = ({ closeEvent }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [role, setRole] = useState("");
    const [rows, setRows] = useState([]);
    // const setRows = useAppStore((state)=>state.setRows);
   const empCollectionRef = collection(db, "products") ;

    const handleNameChange=(event)=>{
       setName(event.target.value) ;
    }
    const handleAgeChange=(event)=>{
        setAge(event.target.value) ;
    }
    const handleRoleChange=(event)=>{
        setRole(event.target.value) ;
    }

    const createUser= async()=>{
            await addDoc(empCollectionRef, {
                Name:name,
                Age:age,
                Role:role,
            });
            getUsers();
            closeEvent();
            Swal.fire("Submitted", "Your fle has been submitted" , "success")
    }
    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

    const currencies = [
        {
          value: 'Admin',
          label: 'Admin',
        },
        {
          value: 'User',
          label: 'User',
        },
       
      ];
      
    return (

        <>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5' align='center'>
                Add product
            </Typography>
            <IconButton style={{ position: 'absolute', top: '0', right: '0' }}
                onClick={closeEvent}>
                <CloseIcon></CloseIcon>
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" size='small'value={name} onChange={handleNameChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Role" variant="outlined" size='small' value={role} onChange={handleRoleChange}  select>
                    {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                         </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Age" variant="outlined" size='small' value={age} onChange={handleAgeChange} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5' align='center'>
                        <Button variant='contained' onClick={createUser}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Addproduct
