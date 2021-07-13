import React,{useContext} from 'react'
import {FaArrowLeft} from 'react-icons/fa';
import {Link,Switch} from 'react-router-dom'
import CartContext from './CartContext';
import { RiDeleteBin5Fill} from "react-icons/ri";
function Checkout(props) {

    const cartCttx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        cartCttx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartCttx.addItem(item);
      };
  
    const totalAmount = `$${cartCttx.totalAmount.toFixed(2)}`;

    
    
    const cartItems =(
        <ul>{cartCttx.items.map((item) => {
        return(
            <div className ='checkout_list'>
                <div>
                    <img src={item.img} alt="running-casual shoes" />
                </div>
                <div className ='checkout_details' >
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <div>
                        <button onAdd={cartItemAddHandler.bind(null, item)}>+</button> 
                        <span style={{margin:'10px'}}>{item.amount}</span> 
                        <button onRemove={cartItemRemoveHandler.bind(null, item.id)}>-</button>  
                        {/* <button className = 'delete_btn'><RiDeleteBin5Fill/></button>                    */}
                    </div>
                </div>
            </div>
        )
    }
        
        )}</ul>
    );
     


    return (
        <div>
           <div style ={{margin:'60px 40px',fontSize:'18px',display:'flex'}} >
           <Switch>
                <Link to="/"><div style = {{float:'left',cursor:'pointer'}}><FaArrowLeft className="carticon" /></div>                  
                </Link>
            </Switch>
                <h4 style= {{textAlign:'center',margin:'-7px 10px 10px 110px' }}>My Cart</h4>  
            </div>
            
            <div>
                {cartItems}
            </div>
            <div className = 'items_amount'>
                <p> {cartCttx.items.length} items</p>
                <h4>{totalAmount}</h4>
            </div>
        </div>
    )
}

export default Checkout
