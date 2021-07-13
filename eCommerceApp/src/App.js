import React from 'react'
import Responsive from 'react-responsive-decorator'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import Details from './pages/Details'
// import Details1 from './pages/Details1'
// import Details2 from './pages/Details2'
// import Details3 from './pages/Details3'
import Checkout from './pages/Checkout'
import { CartProvider } from './pages/CheckoutContext'
// import Mainheader from './components/Mainheader'
// import DummyName from './components/DummyName'
// import Product from './components/Product'
function App() {
  return (
  <CartProvider>
    <div className="App">
      <div className="container">
       
            
            <main>
                <Switch>
                    <Route exact path="/">
                      <Frontpage />{" "}
                    </Route>
                    <Route  path="/Details/:product_name" component={Details}>
                      <Details />{" "}
                    </Route>
                    {/* <Route  path="/Details1" component={() => <Details1 authorized = {false}/>}>
                      <Details1 />{" "}
                    </Route>
                    <Route  path="/Details2" component={() => <Details2 authorized = {false}/>}>
                      <Details2 />{" "}
                    </Route>
                    <Route  path="/Details3" component={() => <Details3 authorized = {false}/>}>
                      <Details3 />{" "}
                    </Route> */}
                    <Route  path="/Checkout" component={Checkout}>
                      
                        <Checkout />{" "}
                                           
                    </Route>
                </Switch>
            </main>
      
      </div>
    </div>
    </CartProvider>
  );
}

export default Responsive(App)

