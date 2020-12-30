import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Product(props){
  const {name, price, instock, index, color} = props,
        linen = 'linen';
  return(
    <tr id={index}>
      <td className={`border ${color}`}>{name}</td>
      <td className={`border ${color}`} style={{backgroundColor: `#ffffe0`}}>{price}</td>
      <td className={`border ${color}`} style={{backgroundColor: linen}}>{instock}</td>
    </tr>
  )
}

function ProductRow(props){
  const myJson = [{category: "Sporting Goods", price: "$49.99", stocked: true, instock: 'ya', name: "Football"},{category: "Sporting Goods", price: "$9.99", stocked: false, instock: "nope", name: "Baseball"}];
  return(
    <table>
      <tbody>
        {myJson.map((item, index) => (<Product name={item.name} price={item.price} instock={item.instock} index={index} key={index} color="red"/>))}
      </tbody>
    </table>
  )
}


function TableBuilder(props){
   return(
    <div className={`border ${props.color}`}>
      {props.title}
      {(props.type && props.type === 'prod') ? <ProductRow/> : null}
    </div>
  );
}

function FilterableProductTable(props){
    const searchTitle = "Search Bar",
          productTitle = "Product Table";
  return(
    <div className={`border ${props.color}`}>
      Filter Product Table
      <TableBuilder color="blue" title={searchTitle}/>
      <TableBuilder color="green" title={productTitle} type="prod"/>
    </div>
  );
}

function App() {
  let arr = [1,2,3],
      arr2 = [4,5];
  console.log([arr,arr2]);
  console.log(arr,arr2);
  console.log([...arr,...arr2]);
  return (
    <FilterableProductTable color="orange"/>
  );
}

export default App;
