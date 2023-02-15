import ProductData from './Data.json';
import { useEffect, useState } from 'react';
import './index.css';
import './Styling/Typography.css';
import ItemMenu from './Components/ItemMenu.js';
import SearchBar from './Components/SearchBar.js';
import TopBar from './Components/TopBar';
import shippingBin from './Icons/shippingBin.png';
import { Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Divider from '@mui/material/Divider';

export default function App() {
  const [myList, setMyList] = useState([]);
  const [list, setList] = useState([]);
  const [total , setTotal] = useState(0);

  function addMyList(item) {
    const my_item = {
      product: item.product,
      sellPrice: item.sellPrice,
      imageLink: item.imageLink,
      isCrop: item.isCrop,
      isArtisan: item.isArtisan,
      isAnimalProduct: item.isAnimalProduct,
      isMetalBar: item.isMetalBar,
      isGem: item.isGem,
      isSyrup: item.isSyrup,
      isFish: item.isFish,
      subtotal: 0
    };
    return my_item;
  }
  
  function addItem(product) { 
    if (!list.includes(product)) {
      const updatedList = [...list.slice(), product];
      const updatedMyList = [...myList.slice(), addMyList(product)];
      setList(updatedList);
      setMyList(updatedMyList); 
    } else {
      alert('Item already added!');
    }
  }

  function updateSubtotal(subtotal, index) {
    let items = [...myList];
    items[index].subtotal = subtotal;
    setMyList([...items]);
  }

  function deleteItem(index) {
    let myItems = [...myList];
    let items = [...list];
    items.splice(index, 1); 
    myItems.splice(index, 1);
    setMyList([...myItems]);
    setList([...items]);
  }

  function deleteAll() {
    setMyList([]);
    setList([]);
  }

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < myList.length; i++) {
      total += myList[i].subtotal;
    }
    setTotal(total);
 }, [myList])

  return (
    <div className="App">
      <TopBar total={total}/>
      <div className="title">
        <img className="shippingBin" src={shippingBin} alt="bin" />
        <h1 className="titleText">Stardew Shipping Bin</h1>
      </div>
      <SearchBar placeholder="Add a product..." data={ProductData} addItem={addItem} addedData={list}/>
      <Divider variant="middle" />
      <ItemMenu itemsList={myList} updateSubtotal={updateSubtotal} deleteItem={deleteItem}/>
      <div className="bottomFunctions"> 
        <Button onClick={deleteAll} sx={{marginBottom:'0.5em'}}>
          Delete All
        </Button>
        <a className="upButton" href="#">
          <ArrowUpwardIcon/>
        </a>
      </div>
    </div>
    );
}
