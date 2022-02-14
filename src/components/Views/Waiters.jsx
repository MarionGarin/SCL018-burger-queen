import React, {useState} from 'react'
import Carte from '../Carte.jsx';
import Afternoon from '../Afternoon.jsx';
import Shop from '../Shop.jsx';
import NewClient from '../NewClient.jsx';
//import Client from '../Commons/Client.jsx';
import styles from '../../Styles/Waiters.module.css';
import Footer from '../Commons/Footer.jsx';
// import menuJson from '../../data/menu.json';


const Waiters = ({menu, shoppingCart, addToCart, eraseItem, takeAway}) => {

  const [modal, addModal] = useState(false) //estado para manipulación del modal
  // modal es el estado y addModal es la función que permite cambiar ese estado. Esto es 
  //lo que extraemos de useState

  const [carte, changeMenu] = useState(true) // estado para manipular los 2 menús

   /* const [client, newClient] = useState(false)*/ //para hacer aparecer datos cliente

    // const data = menuJson; // contenido de data del menú 
   
    return (
      <>
  
        
        <div className={styles.optionBtns}>
          <button type="button" class={`btn btn-primary ${styles.client}`} onClick={()=>addModal(true)}>NUEVO CLIENTE</button>
          <button type="button" class={`btn btn-outline-primary ${styles.orders}`}>VER PEDIDOS</button>
        </div>
       
        {modal === true?
       <NewClient addModal={addModal}/>
       :
       <div></div>
       }
      {/*
       onClick={()=>addModal(true)} Esta línea va en el botón Nuevo Cliente

       
        {client === true?
       <Client/>
       :
       <div></div>
       }
      */}
      

        <div className={styles.takeOrder}>

           <section className={styles.food}>
                <section className={styles.foodBtns}>
                    <button type="button" class={`btn btn-secondary ${styles.carteBtn}`} onClick={()=>changeMenu(true)}>CARTA</button>
                    <button type="button" class={`btn btn-secondary ${styles.afternoonBtn}`} onClick={()=>changeMenu(false)}>AFTERNOON TEA</button>
                </section>

                <div className={styles.info}>
                    {carte === true?
     
                    <div className={styles.carteMenu}><Carte menu={menu} shoppingCart= {shoppingCart} addToCart={addToCart}/></div>
                    :
                    <div className={styles.afternoonMenu}><Afternoon menu={menu} shoppingCart={shoppingCart} addToCart={addToCart}/></div>
                    }
                </div>
            </section>

            <div className={styles.boardCalculator}>
             <Shop data={menu} shoppingCart={shoppingCart} addToCart={addToCart}  eraseItem = {eraseItem} takeAway={takeAway}/>
             <button type="button" className={`btn btn-secondary ${styles.confirmBtn}`}>CONFIRMAR ORDEN</button>
            </div>
      
    
    
        
         </div>
   
     
     <Footer/>
      </>
    )

    
  }
  
  export default Waiters
  
  /* 
      const [state, setState] = useState({
      article: data,
      cart:[]
      
    });

  
   

    const addItems = (product) => {

  
      return setState({
        ...state,
        cart: state.cart.find((cartItem)=>cartItem.id === product.id)? // para encontrar el item
              state.cart.map((carteItem)=>carteItem.id === product.id?  // para añadir un nuevo item
                {...carteItem,
                 count: carteItem.count +1}
                 :
                 carteItem)
                 :
                 [...state.cart, {
                   product,
                   count: 1
                 }]


      });
    };
    console.log(state.cart);
  

    const shopping = {addItems};
    console.log(shopping);

    const purchase = {state};
   
    
*/