import {Link,Switch} from 'react-router-dom'
import {FaShoppingBag} from 'react-icons/fa'
import {FaStream} from 'react-icons/fa'
const Mainheader = () => {
    return (
      <header>
        <nav>
          <ul className="first-bar">
            <li>
              <FaStream />
            </li>
            <li className="cart">
              <Switch>
                <Link to="/Checkout"><button style = {{backgroundColor:'transparent',border:'none'}}><FaShoppingBag className="carticon" /></button>
                  
                </Link>
              </Switch>
            </li>
          </ul>
        </nav>
      </header>
    );
}
export default Mainheader