import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const ourTeam = ['Azizul', 'Shaju', 'Shahin', 'Shuhag', 'Murshed']
  const products =[
    {name:'PhotoShop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
    {name:'Premiere El', price:'$249.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a React person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          ourTeam.map(teamPep => <li>{teamPep}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {
        products.map(pd=> <Product product={pd}></Product>)
      }
        <Person></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    // console.log('Calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => console.log ('clicked');
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  // console.log(props);
  const {name, price} = props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
       <h3>{name}</h3>
       <h5>{price}</h5>
       <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  const personStyle={
    border:'2px solid gold',
    width:'400px',
    margin: '10px'
  }
  // console.log(props)
  return (
  <div style= {personStyle}>
    <h1>My name: {props.name}</h1>
    <h3>My Profession: {props.job}</h3>
  </div>
  )
}
export default App;
