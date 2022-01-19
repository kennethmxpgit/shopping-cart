import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home';
import Store from './Components/Store';
import {useState,useEffect} from 'react'
import Cart from './Components/Cart';


export default function App() {
  //cart only contains iid and qty
  //catalog contains price pic name. iid is the array key

  const [cart,setCart]=useState([]);
  const [count,setCount]=useState(0);
  //on Mount
  useEffect(()=>{
    setCart([]);
    setCount(0);
  },[])
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

  function removeItem(item){
    let arrKey;
    let tempArr=cart;
    tempArr.find((el,index)=>{
        arrKey=index;
        return el.iid==item;
    });
    //check if qty is <1
    if(tempArr[arrKey].qty<2){
      tempArr.splice(arrKey,1);
    } else{
      tempArr[arrKey].qty=tempArr[arrKey].qty-1;
    }
    setCart(tempArr);
    console.log(cart);
    setCount(count-1);
  }
  function addItem(item){
    const tempArr=cart;
    //check for dupes
    let foundDupe='';
    cart.forEach((el,index) => {
      if(el.iid==item) foundDupe=index; 
    });

    if(foundDupe===''){
      tempArr.push(
        {iid:item,qty:1}
      );
    } else{
      tempArr[foundDupe].qty++;
    }
    setCart(tempArr);
    setCount(count+1);

    //add Animations
    const toAnimate=document.querySelector('#cartArea i');
    toAnimate.classList.add('animateThis');
    setTimeout(()=>{toAnimate.classList.remove('animateThis');},300);
  }



  return(
    <Router>
      <NavBar/>
      <div id='content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store catalog={catalog} addItem={addItem} count={count}/>}/>
          <Route path="/cart" element={<Cart removeItem={removeItem} addItem={addItem} cart={cart}/>}/>
        </Routes>
      </div>

      <div id='footer'><a href='https://github.com/kennethmxpgit/shopping-cart' target="_blank">
        <i class="fab fa-github"></i>&nbsp;kennethmxpgit
      </a>
     </div>
    </Router>

  )
}

function NavBar(){
  return(
    <div id='navBar'>
        <Link to="/" class='navText'>Home</Link>
        <Link to="/store" class='navText'>Store</Link>
    </div>
  )
}
