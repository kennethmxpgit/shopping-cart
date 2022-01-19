export default function Cart(props){
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
    function plusFunc(item){
        props.addItem(item);
    }
    function minFunc(item){
        props.removeItem(item);
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
                    <div>qty : {props.qty}</div>
                    

                    <div class='buttonContainer'>
                        <button onClick={()=>minFunc(props.iid)}>-</button>
                        <button onClick={()=>plusFunc(props.iid)}>+</button>
                    </div>

                </div>
            </div>
        )
    }

    function itemsFromCart(){
        if(props.cart[0]==undefined){
            return <div class='itemsContainer centerMe'>Shopping Cart is Empty</div>
        } else{
            return <div class='itemsContainer'>
            {props.cart.map((el)=>
                <Item iid={el.iid} qty={el.qty}/>
            )}

        </div>

        }

    }

    return(
        <div class='mainScreen'>
            <div id='cartPage'>
                {itemsFromCart()}
            </div>
                <div>
                </div>
        </div>
    )
}