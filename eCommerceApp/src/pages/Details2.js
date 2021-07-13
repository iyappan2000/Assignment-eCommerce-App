import React,{useContext,useRef,useCallback} from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { FcLike } from "react-icons/fc";
import { FaAngleDown } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import {Link,Switch} from 'react-router-dom'
import CartButton from './CartButton';
import CartContext from './CartContext';
import Button from '@material-ui/core/Button';
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

function Details2() {

    const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });

      img.style.setProperty("transform", value);
    }
  }, []);
    const cartCtx = useContext(CartContext);
    
    const addToCart = () => {
         cartCtx.addItem({
             id:'1',
             name:'Sneaker Casual shoe',
            amount:1,
            price: 360.00,
             img:'./images/shoes-17841.png'
         })
         console.log('Worked');
    }
    return (
        <div className = 'details' >
            <div style ={{margin:'40px',fontSize:'18px'}} >
            <Switch>
                <Link to="/"><div style = {{float:'left',cursor:'pointer'}}><FaArrowLeft className="carticon" /></div>                  
                </Link>
            </Switch>
            <CartButton/>
 
            </div>
            <div className= "details_img" style={{paddingTop:'100px'}}>
             <QuickPinchZoom onUpdate = {onUpdate} className = 'Zoom'><img ref = {imgRef} src= './images/shoes-17841.png' alt= 'Shoes-Details'  /></QuickPinchZoom>   
            </div>
            <div className = 'details_page'>
                <div className ='page_bar'>
                    <h3>Sneaker Casual shoe</h3>
                    <div style = {{float:'right',margin:'20px 10px 0 100px',fontSize:'20px'}}><FcLike /></div>
                </div>
                <div className = 'page_description'>
                    <p>with classic Feature such casual type details in black or brown, and our heriatage strap classic look</p>
                </div>
                <div className = 'page_footer'>
                    <div className ='footer_size'>
                        <p>size 10m</p>
                        <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><FaAngleDown/></div>
                    </div>
                    <div className='footer_color'><p>color</p> 
                        <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px',color: '#2b1e1e'}}><BsCircleFill/></div>
                        <div style = {{float:'right',margin:'17px 10px 0 0px',fontSize:'20px'}}><FaAngleDown/></div>
                    </div>
                    
                </div>
                
            </div>
                <div style = {{textAlign:'center',fontWeight:'600',margin:'20px'}} className = 'AddCart'>
                    <Button onClick = {addToCart} >Add to cart: $ 360.00</Button>
                </div>
        </div>
    )
}

export default Details2
