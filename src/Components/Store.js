import { useEffect } from "react/cjs/react.development";
import {Router,Routes,Route,Link} from 'react-router-dom';


export default function Store(props){
    
    const catalog=[
        {price:'20',name:'T-shirt Urban Black'},
        {price:'20',name:'T-shirt Urban Red'},
        {price:'10',name:'Nike Blue Cap'},
        {price:'25',name:'Pink Dress'},
        {price:'23',name:'Striped Polo'},
        {price:'30',name:'Black Hoodie'},
        {price:'15',name:'T-shirt Artistic'},
        {price:'40',name:'Nike Shirt Black'},
        {price:'10',name:'Shorts - Gray'},
        {price:'50',name:'Trousers - Black'},
      ]

      function addToCart(item){
          props.addItem(item);
      }
      function Item(props){
        return(
            <div class='item'>
                <div class='itemLeft'>
                    <img src={require("./images/"+props.iid+".jpg")}></img>
                </div>
                
                <div class='itemRight'>
                    <div class='itemName'>{catalog[props.iid].name}</div>
                    <div>
                        <span>USD</span>
                        <span class='itemPrice'>{catalog[props.iid].price}</span>
                        
                    </div>
                    <button class='addCartBtn' onClick={()=>addToCart(props.iid)}>Add to Cart</button>
                </div>
            </div>
        )
    }
    const linkStyle=''
    return(
        <div class='mainScreen'>
            <div id='itemsPage'>
                <div class='itemsContainer'>
                    <Item iid='0'/>
                    <Item iid='1'/>
                    <Item iid='2'/>
                    <Item iid='3'/>
                    <Item iid='4'/>
                    <Item iid='5'/>
                    <Item iid='6'/>
                    <Item iid='7'/>
                    <Item iid='8'/>
                    <Item iid='9'/>
                </div>
            </div>
            <Link to='/cart' style={{ textDecoration: 'none' ,color:'inherit'}}>
                <div id='cartArea'>
                    <div id='itemCount'>{props.count}</div>
                    <i class="fas fa-shopping-cart fa-2x"></i>
                </div>
                
            </Link>

        </div>
    )
}
