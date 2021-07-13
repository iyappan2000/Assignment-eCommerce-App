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


function Details3() {
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
             id:'4',
             name:'Puma Casual Shoe',
            amount:1,
            price:700.00,
             img:'./images/shoes-17838.png'
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
            <div className= "details_img" style={{paddingTop:'160px'}}>
            <QuickPinchZoom onUpdate = {onUpdate}><img ref = {imgRef} src= './images/shoes-17838.png' alt= 'Shoes-Details'/></QuickPinchZoom>   

            </div>
            <div className = 'details_page'>
                <div className ='page_bar'>
                    <h3>Puma Casual Shoe</h3>
                    <div style = {{float:'right',margin:'20px 10px 0 100px',fontSize:'20px',color:'white'}}><FcLike /></div>
                </div>
                <div className = 'page_description'>
                    <p>with classic Feature such casual type details in black or brown, and our heriatage strap classic look</p>
                </div>
                <div className = 'page_footer'>
                    <div className ='footer_size'>
                        <p>size 7m</p>
                        <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><FaAngleDown/></div>
                    </div>
                    <div className='footer_color'><p>color</p> 
                        <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px',color: '#117a64'}}><BsCircleFill/></div>
                        <div style = {{float:'right',margin:'17px 10px 0 0px',fontSize:'20px'}}><FaAngleDown/></div>
                    </div>
                    
                </div>
                
            </div>
                <div style = {{textAlign:'center',fontWeight:'600',margin:'20px'}} className = 'AddCart'>
                    <Button onClick = {addToCart} >Add to cart: $ 700.00</Button>
                </div>
        </div>
    )
}

export default Details3
