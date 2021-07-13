import React,{useContext,useRef,useCallback, useState} from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { FcLike } from "react-icons/fc";
import { FaAngleDown } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import {Link,Switch, useParams} from 'react-router-dom'
import CartContext from './CartContext';
import CartButton from './CartButton';
import Button from '@material-ui/core/Button';
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

function Details(props) {


    const [activeClass, setClass] = useState('');
    const details_data = () => [
        {
            id:'1',
            product_name : 'Attudist Casual Shoe',
            size:'8 mm',
            price:560.00,
            image:'../images/shoes-17837.png',
            amount:1,
            color:'red',
        },
        {
            id:'2',
            product_name : 'Adidas Casual shoe',
            size:'7 mm',
            price:1560.00,
            amount:1,
            image:'../images/shoes-17851.png',
            color:'black',
        },
        {
            id:'3',
            product_name : 'Sneaker Casual shoe',
            size:'6 mm',
            amount:1,
            price:360.00,
            image:'../images/shoes-17838.png',
            color:'brown',
        }, {
            id:'4',
            product_name : 'puma Casual Shoe',
            size:'9 mm',
            amount:1,
            price:700.00,
            color:'red',
            image:'../images/shoes-17841.png',

        },
    ]

    const [data] = useState(details_data)
    const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });

      img.style.setProperty("transform", value);
    }
  }, []);
  const {product_name} = useParams();

    const cartCtx = useContext(CartContext);
    
   const addToCart = () => {
       <div>
           {data.filter(card => card.product_name === product_name).map((item) => {
           return(
              cartCtx.addItem({
            id:item.id,
            name:item.product_name,
            price:item.price,
            amount:item.amount,
            img:item.image
        }) 
           )
       })}
       </div>
       
        
        console.log('Worked');
   }
    return (
        <div className = 'details'>
            <div style ={{margin:'40px',fontSize:'18px'}} >
            <Switch>
                <Link to="/"><div style = {{float:'left',cursor:'pointer'}}><FaArrowLeft className="carticon" /></div>                  
                </Link>
            </Switch>

                <CartButton/>
            </div>
            <div>
                {data.filter(card => card.product_name === product_name).map((item,index) => {
                return(
                <div className = 'details_header' key={index}>
                    <div className = 'details_img'>
                    <QuickPinchZoom onUpdate = {onUpdate}><img ref = {imgRef} src= {item.image} alt= 'Shoes-Details'/></QuickPinchZoom>   
                    </div>
                    <div className = 'details_page'>
                        <div className ='page_bar'>
                            {item.product_name}
                    <div style = {{float:'right',margin:'20px 10px 0 100px',fontSize:'20px'}}><FcLike /></div>
                        </div>
                        <div className = 'page_description'>
                            <p>with classic Feature such casual type details in black or brown, and our heriatage strap classic look</p>
                         </div>
                         <div className = 'page_footer'>
                        <div className ='footer_size'>
                            <p>size 9m</p>
                            <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><FaAngleDown/></div>
                        </div>
                        <div className='footer_color'><p>color</p> 
                            <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><BsCircleFill/></div>
                            <div style = {{float:'right',margin:'17px 10px 0 0px',fontSize:'20px'}}><FaAngleDown/></div>
                        </div>
                    </div>
                    
                    </div>
                    <div style = {{textAlign:'center',fontWeight:'600',margin:'20px'}}  className = 'AddCart'>
                     <Link to = '/Checkout'><Button onClick = {addToCart}><div onClick={() => setClass('active')} className={activeClass}>Add to cart</div></Button></Link>   
                    </div>
                </div>
                );
                
                
            })}
            </div>
{/*             
            <div className= "details_img" style={{paddingTop:'90px'}}>
            <QuickPinchZoom onUpdate = {onUpdate}><img ref = {imgRef} src= './images/shoes-17837.png' alt= 'Shoes-Details'/></QuickPinchZoom>   

            </div> */}
            {/* <div className = 'details_page'>
                <div className ='page_bar'>
                    <h3>Attudist Casual Shoe</h3>
                    <div style = {{float:'right',margin:'20px 10px 0 100px',fontSize:'20px'}}><FcLike /></div>
                </div>
                <div className = 'page_description'>
                    <p>with classic Feature such casual type details in black or brown, and our heriatage strap classic look</p>
                </div>
                <div className = 'page_footer'>
                    <div className ='footer_size'>
                        <p>size 9m</p>
                        <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><FaAngleDown/></div>
                    </div>
                    <div className='footer_color'><p>color</p> 
                        <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><BsCircleFill/></div>
                        <div style = {{float:'right',margin:'17px 10px 0 0px',fontSize:'20px'}}><FaAngleDown/></div>
                    </div>
                    
                </div>
                
            </div> */}
                {/* <div style = {{textAlign:'center',fontWeight:'600',margin:'20px'}}  className = 'AddCart'>
                        <Button onClick = {addToCart}><div onClick={() => setClass('active')} className={activeClass}>Add to cart: $ 560.00</div></Button>
                </div> */}
        </div>
    )
}

export default Details
