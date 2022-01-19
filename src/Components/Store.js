export default function Store(){
    const catalog=[
        {pic:'',price:'',name:'',}
      ]
    return(
        <div class='mainScreen'>
            <div id='itemsPage'>
                <Item iid='1'/>
            </div>
            <div id='cartArea'>
                <i class="fas fa-shopping-cart fa-2x"></i>
            </div>
        </div>
    )
}
function Item(props){
    return(
        <div>
            
        </div>
    )
}