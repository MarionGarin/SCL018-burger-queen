import React from 'react'
import styles from '../Styles/Shop.module.css'

const Shop = ({shoppingCart, addToCart, changeCart, eraseItem, takeAway}) => {

 // const menu = data
  //console.log(menu);
 
  
  const total = shoppingCart.reduce((total, product) => (total + product.price * product.count) ,0)
  .toFixed(0);

  // en reduce, el primer parámetro es la fx reductora, mientras que l 0 corresponde al 
  // valor inicial del acumulador. Lo que retorna en l10 es el valor del acumulador (total)
  // más el valor del siguiente número que se adiciona (product.price * product.count)


 
    return (

      <div>



            <div>
         {/*aquí debería ir la info del cliente*/}
        
            </div>

            <div className={styles.board}>

    
            {shoppingCart.length > 0 ?
            
               shoppingCart.map((product, index) => {
                 
                  return (
                
                   <section className={styles.cartItem} key={index}>
                   {product.name}
                   ${product.price}
                   , cant: {product.count}
                    <button className={styles.deleteButton} onClick={()=>eraseItem(product.id)}>X</button>
                    <button className={styles.deleteButton} onClick={()=>takeAway(product.id)}>-</button>
                    
                   </section>
                   
                   )
               })
               
            
             :
             <p className={styles.cartTitle}> Añade los ítems de tu cliente </p>
      
             }
            
          
             </div>  

            <p> Total: $ {total} </p>
        



      </div>
    )
  }
  
  export default Shop
  
/* 
Función que añade ítems al recuadro:
En l.4 recibimos el prop shoppingCart, que contiene la variable "carrito de compras", 
que es un array vacío en su inicio. Este viene de App.js

En l.21 analizamos el estado del array carrito de compras con un operador ternario. 
Si su length es mayor a 0 significa que tiene algún elemento dentro. En ese caso, 
queremos imprimir su contenido dentro del return. Eso se mostrará en la pizarra*/

  /*
  
      {cartContent.map((product,index)=> (
      <div key={index}>
        <p>{product.name}</p>
        {console.log(product.name)}

      </div>

      )

        )}

                  {
            <section className={styles.total}>
             {shoppingCart.reduce((total, product) => (total + product.price * product.count),0)
             .toFixed(0)}
             </section>
                  
                  }

  */