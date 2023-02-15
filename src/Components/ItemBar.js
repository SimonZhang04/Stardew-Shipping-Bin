import TextField from '@mui/material/TextField';
import silver from '../Icons/silver.png';
import gold from '../Icons/gold.png';
import iridium from '../Icons/iridium.png';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '../Styling/ItemBar.css'
import CloseIcon from "@material-ui/icons/Close";

export default function ItemBar({item, index, updateSubtotal, deleteItem}) {
    const [regQuantity, setRegQuantity] = useState(0);
    const [silQuantity, setSilQuantity] = useState(0);
    const [golQuantity, setGolQuantity] = useState(0);
    const [iriQuantity, setIriQuantity] = useState(0);
    const [total, setTotal] = useState(0);
  
    const handleRegChange = event => {
      if (event.target.value < 0) {
        event.target.value = 0;
      } else if (event.target.value > 99999999) {
        event.target.value = 99999999;
      }
      setRegQuantity(event.target.value);
    }
  
    const handleSilChange = event => {
      if (event.target.value < 0) {
        event.target.value = 0;
      } else if (event.target.value > 99999999) {
        event.target.value = 99999999;
      }
      setSilQuantity(event.target.value);
    }
  
    const handleGolChange = event => {
      if (event.target.value < 0) {
        event.target.value = 0;
      } else if (event.target.value > 99999999) {
        event.target.value = 99999999;
      }
      setGolQuantity(event.target.value);
    }
  
    const handleIriChange = event => {
      if (event.target.value < 0) {
        event.target.value = 0;
      } else if (event.target.value > 99999999) {
        event.target.value = 99999999;
      }
      setIriQuantity(event.target.value);
    }

    function handleDelete() {
      deleteItem(index);
    }
  
    useEffect(() => {
      setTotal(parseInt(regQuantity * item.sellPrice + silQuantity * item.sellPrice * 1.25 + golQuantity * item.sellPrice * 1.5 + iriQuantity * item.sellPrice * 2, 10));
   }, [regQuantity, silQuantity, golQuantity, iriQuantity])
  
    useEffect(() => {
      updateSubtotal(total, index);
    }, [total])
  
    return (
      <div className="itemBar ">
          <img className="productImg" src={item.imageLink} alt="product icon"/>
          <div className="productDesc">
            <h2 className="itemName">{item.product}</h2>
            <p className="baseValue">{item.sellPrice}G</p>
          </div>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField 
            id="standard-basic" 
            label="Regular" 
            variant="standard" 
            onChange={handleRegChange} 
            type="number"
            defaultValue="0" 
            InputProps={{ inputProps: { min: 0, max: 999999 } }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <img className="qualityIcon" src={silver} alt="silver" />
            <TextField 
            id="standard-basic" 
            label="Silver" 
            variant="standard" 
            onChange={handleSilChange} 
            type="number"
            defaultValue="0" 
            InputProps={{ inputProps: { min: 0, max: 999999 } }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <img className="qualityIcon" src={gold} alt="gold" />
            <TextField 
            id="standard-basic" 
            label="Gold" 
            variant="standard" 
            onChange={handleGolChange} 
            type="number"
            defaultValue="0" 
            InputProps={{ inputProps: { min: 0, max: 999999 } }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <img className="qualityIcon" src={iridium} alt="iridium" />
            <TextField 
            id="standard-basic" 
            label="Iridium" 
            variant="standard" 
            onChange={handleIriChange} 
            type="number"
            defaultValue="0" 
            InputProps={{ inputProps: { min: 0, max: 999999 } }}
            />
          </Box>
          <button className="deleteButton" onClick={handleDelete}>
            <CloseIcon className="deleteItem" />
          </button>
          <p className="subtotal"> Subtotal: {total} </p>
      </div>
    )
  }