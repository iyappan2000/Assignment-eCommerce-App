import React,{useState} from 'react'
import { Link} from 'react-router-dom';
//ort Products from "./Products"

const MainContent = () => {
    
    const Products = () => [
        {
            id:'1',
            product_name : 'Attudist Casual Shoe',
            price: '$ 560.00',
            img:'./images/shoes-17837.png'
        },
        {
            id:'2',
            product_name : 'Adidas Casual shoe',
            price: '$ 1560.00',
            img:'./images/shoes-17851.png'
        }
        ,{
            id:'3',
            product_name : 'Sneaker Casual shoe',
            price: '$ 360.00',
            img:'./images/shoes-17838.png'
        },{
            id:'4',
            product_name:'puma Casual Shoe',
            price:'$ 700.00',
            img:'./images/shoes-17841.png'
        }
    ]
    const [data] = useState(Products);
    
    return (
      <div className="main_content">
        {data.map((item) => {
            return(
                <div className="card" >
            <Link  to = {`/Details/${item.product_name}`} >
                <div className="card_img">
                    <img src={item.img} alt="running-casual shoes" />
                </div>
                <div className="card_header">
                    <h2>{item.product_name}</h2>
                    <p>{item.price}</p>
                </div>
            </Link>
            </div>
            )
            
            {/* <div className="card"  style={{paddingTop:'40px'}}>
            <Link  to = '/Details1' >
                <div className="card_img">
                    <img src='./images/shoes-17851.png' alt="running-casual shoes" />
                </div>
                <div className="card_header">
                    <h2>Adidas Casual shoe</h2>
                    <p>$ 1560.00</p>
                </div>
            </Link>
            </div> */}
            {/* <div className="card" style={{paddingTop:'40px'}}>
            <Link  to = '/Details2' >
                <div className="card_img" style={{fontSize:'40px'}}>
                    <img src='./images/shoes-17841.png' alt="running-casual shoes" />
                </div>
                <div className="card_header">
                    <h2>Sneaker Casual shoe</h2>
                    <p>$ 360.00</p>
                </div>
            </Link>
            </div> */}
            {/* <div className="card" style={{paddingTop:'40px'}}>
            <Link  to = '/Details3' >
                <div className="card_img">
                    <img src='./images/shoes-17838.png' alt="running-casual shoes" />
                </div>
                <div className="card_header">
                    <h2>puma Casual Shoe</h2>
                    <p>$ 700.00</p>
                </div>
            </Link>
            </div> */}
            
          
        })}
      </div>
    );
}
export default MainContent;