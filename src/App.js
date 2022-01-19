import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home';
import Store from './Components/Store';
import {useState,useEffect} from 'react'


export default function App() {
  //cart only contains iid and qty
  //catalog contains price pic name. iid is the array key

  const [cart,setCart]=useState('');
  const catalog=[
    {pic:'',price:'',name:'',}
  ]
  //on Mount
  useEffect(()=>{
    setCart()
  },[])
  return(
    <Router>
      <NavBar/>
      <div id='content'> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store cart={cart}/>}/>
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
