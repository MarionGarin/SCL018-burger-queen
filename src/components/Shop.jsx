import React from 'react'
import styles from '../Styles/Shop.module.css'

const Shop = ({shoppingCart}) => {

 // const menu = data
  //console.log(menu);
  
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
                </section>
             )
             })
             :
             <p className={styles.cartTitle}> Añade los ítems de tu cliente </p>
      
      }

      </div>  



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
  */