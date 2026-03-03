import Item from "./Item";

function List (){
    return (
    <>
    <ul>
        <Item marca="Fiat" modelo="Toro"/>
        <Item marca= "Ford" modelo={200}/>
    </ul>
    </>
    )
}

export default List;