import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './data/menu.json';
import Login from './components/Views/Login';
import Register from './components/Views/Register';
import Welcome from './components/Views/Welcome';
import Waiters from './components/Views/Waiters';
import Kitchen from './components/Views/Kitchen';
import Error404 from './components/Views/Error404';
// import './App.css';

function App() {

 // guardando el menú importado en una constante
  const menu = data;

 //estableciendo estado inical del carrito, que es un array vacío la función que lo modificará
  const [shoppingCart, changeCart] = useState([]);
 
    const addToCart = (id, name, price) => {
      // si el carrito no tiene elementos, entonces agregamos uno (ese objeto):
         if (shoppingCart.length === 0){
         changeCart([{
          id: id, 
          name: name, 
          price: price, 
          count: 1
      }])
     
    } else {
      /* primero debemos clonar el carrito para poder adicionarle cosas y que se vaya 
      actualizando. De lo contrario, no lo podremos editar */

      const newCart = [...shoppingCart];

      // luego debemos iterar los elementos dentro de newCart para examinarlos, pues debemos
      // saber si el carrito ya tiene o no el producto que deseo añadir. 
      // con método filter ejecutamos una fx callback para cada uno de ellos
      // Finalmente, guardamos ese array resultante en la constante isInCart ?, 
      // lo que nos devolverá un booleano true or false debido al .length > 0

      const isInCart = newCart.filter( (cartProduct) => {
        return cartProduct.id === id
      }).length > 0;

     /* Luego debemos hacer una nueva comprobación. Si el producto ya está en el carrito 
     (es decir, si isInCart tiene el valor de true), entonces debemos actualizar el 
     carrito aumentando el contador respecto de ese producto */
      if (isInCart){
        // Primero debemos encontrar el producto en base a su index
        newCart.forEach((cartProduct, index)=>{ 
           if (cartProduct.id === id){
              const count =newCart[index].count;
              newCart[index] = { 
                id: id, 
                name: name, 
                price: price, 
                count: count + 1
              }
           }
        });

      /* si el producto no está en el carrito, entonces actualizamos el objeto sin 
      modificar el contador */
      } else {
        newCart.push(
          {
            id: id,
            name: name,
            price: price,
            count: 1
          });
      }

     // Finalmente, debenos actualziar el carrito

     changeCart(newCart);


    }

     console.log(shoppingCart)
    
    }
   
    
    
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element ={<Error404 />} />
      <Route path="/" element ={<Welcome />} />
      <Route path="/login" element ={<Login />} />
      <Route path="/register" element ={<Register />} />
      <Route path="/welcome" element ={<Welcome />} />
      <Route path="/waiters" element ={<Waiters 
      menu={menu} 
      shoppingCart={shoppingCart}
      addToCart= {addToCart}
      />} />
      <Route path="/kitchen" element ={<Kitchen />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
método map
método filter
spread operator
*/