import React from 'react'
import styles from '../Styles/Afternoon.module.css';
// import data from '../data/menu.json';


const Afternoon = ({menu, addToCart}) => {

  const dataAfternoon = menu.afternoon;
  
    return (

      
    
      <section>
        <div className={styles.afternoonMenu}>
          {dataAfternoon.map((product, index) => {
           return (
             <button className={styles.afternoonItem} key={index} onClick={()=>addToCart(product.id, product.name, product.price)}>
               {product.name}
              ${product.price}
             </button>
           );
          }
          )}
        </div>
      </section>
 
    
    )
  }
  
  export default Afternoon
  
  /* En la línea 15, el método Map va a recorrer cada elemento del arreglo y nos va
  a devolver un arreglo final. Map recibe un callback, que se ejecuta respecto de cada
  elemento que se encuentre dentro de ese arreglo. En este caso, cada uno de esos 
  elementos se llama "producto" y se toma su "index" como referencia para la iteración. 
  Ambos son parámetros de la función */

  /*Se añade el key a cada producto para que React no nos marque error */

  