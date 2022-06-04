import React from 'react';
import {observer} from 'mobx-react-lite';
import { types } from 'mobx-state-tree';
import logo from './logo.svg';
import './App.css';


const MyData = types
  .model({
    price: types.number,
    count: types.number,
  })
  .actions((self)=>{
    function setCount($count:number){
      self.count = $count;
    };
    function setPrice($price:number){
      self.price = $price;
    };

    return {
      setCount , setPrice
    }
  })
  .views((self)=>({
    get total(){
      return self.price*self.count;
    }
  }))



const myData = MyData.create({
  price: 50,
  count: 10,
})

let price = 50;



function App() {
  

  const onCount = ()=>{
    myData.setCount(myData.count+1);
  }

  const onPrice = ()=>{
    myData.setPrice(myData.price+1);
  }

  return (
    <div className="App">
      
      <div className="App-body">
          单价: <input type="text" value={myData.price} onChange={()=>{}}></input> 
          <br/>
          数量: <input type="text" value={myData.count} onChange={()=>{}}></input>
          <br/>
          总价: {myData.total}
          <br/><br/><br/>
          <button onClick={onCount}>数量+1</button>   <div style={{width:"20px",display:"inline"}}/>
          <button onClick={onPrice}>单价+1</button>
      </div>
    </div>
  );
}

export default observer(App);
