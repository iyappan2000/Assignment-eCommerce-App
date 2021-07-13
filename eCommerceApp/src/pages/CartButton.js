import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import {Link,Switch} from 'react-router-dom'

function CartButton() {
    return (
        <div>
            <Switch>
                <Link to="/Checkout"><div style = {{float:'right',cursor:'pointer'}}><FaShoppingBag className="carticon" /></div>                  
                </Link>
              </Switch> 
        </div>
    )
}

export default CartButton;
