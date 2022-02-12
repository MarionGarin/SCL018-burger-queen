import React from 'react'
import styles from '../Styles/Carte.module.css';
// import data from '../data/menu.json';

const Carte = ({menu, addToCart}) => {

  const dataCarta = menu.carte;
  
  
    return (
    
    
      <div>

        <section className={styles.carteMenu}>
          {dataCarta.map((product, index) => {
           return (
             <button className={styles.carteItem} key={index} onClick={()=>addToCart(product.id, product.name, product.price)}>
               {product.name}
              ${product.price}
             </button>
           )
          }
          )}
        </section>
      </div>


    )
  }
  
  export default Carte

  
  