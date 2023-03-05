import ItemBar from './ItemBar.js';
import '../Styling/ItemMenu.css';

export default function ItemsMenu({itemsList, updateSubtotal, deleteItem}) {
    const items = itemsList.map((item, index) => {
      return (
        <div className="itemsMenu" key={item.product}>
          <ItemBar item={item} index={index} updateSubtotal={updateSubtotal} deleteItem={deleteItem}/>
        </div>
      )
    });
  
    return (
      <div className="itemsMenuContainer">
        {items}
      </div>
    )
  }