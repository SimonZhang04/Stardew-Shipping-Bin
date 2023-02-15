import { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import '../Styling/SearchBar.css';
import '../Styling/Typography.css';

export default function SearchBar({placeholder, data, addItem, addedData}) {
    function itemStyle(value) {
        if (addedData.includes(value)) {
            return {backgroundColor: 'rgba(25, 118, 210, 0.2)', }
        } else {
            return {backgroundColor: 'white'}
        }
    }

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.product.toLowerCase().includes(searchWord.toLowerCase());
        });
  
        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    };
  
    function clearInput() {
        setFilteredData([]);
        setWordEntered("");
    }
  
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
                <div className="searchIcon"> 
                    {filteredData.length === 0 ? 
                        (<SearchIcon />)  : 
                        (<CloseIcon id="clearBtn" onClick={clearInput}/>)
                    }
                </div>
            </div>
  
            {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                    <button className="dataItem" style={itemStyle(value)} onClick={() =>  {addItem(value)}}> 
                        <p> {value.product} </p>
                        <img src={value.imageLink} alt="product icon"/>
                    </button>
                    )
                })}
            </div>
            )}
        </div>
    );
  }