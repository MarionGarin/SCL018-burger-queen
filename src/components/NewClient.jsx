import React, { useState } from 'react'
import styles from '../Styles/NewClient.module.css';


const NewClient = (props) => {

  const [table, chooseTable] = useState('');
  const [name, writeName] = useState('');
  const [toTake, orderToTake] = useState('');

  const createTable= (event)=> {
      chooseTable(event.target.value)
  };
  
  const createName= (event)=> {
    writeName(event.target.value)
};

const createTakeOrder= (event)=> {
  orderToTake(event.target.value)
};


  const createClient = (e)=> {
    
    e.preventDefault();
    props.addModal(false);
    alert('Se ha enviado a Firebase');

}
    return (

     
      <div className={`${styles.modalContainer} ${styles.show}`}>

      
      <div className={styles.modal}>
      <form action='' onSubmit={createClient}>
      <p>N° Mesa:{table}</p>
      <p>Cliente:{name}</p>
      <p>¿Para llevar?{toTake}</p>
       <div>
         <label htmlFor='table'>Número de Mesa</label>
         <input 
         type='text'
         name='table' 
         id='table'
         value={table}
         onChange= {createTable}
         />
       </div>

       <div>
         <label htmlFor='name'>Cliente</label>
         <input 
         type='text' 
         name='name' 
         id='name'
         value={name}
         onChange= {createName}
        />
       </div>

       <div>
         <label htmlFor='toTake'>¿Para llevar?</label>
         <input 
         type='text' 
         name='toTake'
         id='toTake'
         value={toTake}
         onChange= {createTakeOrder}
         />
       </div>

       <button 
       type='submit' 
       onClick={()=>createClient}>Crear cliente</button>

       </form>
      </div>

      </div>
    )
  }
  
  export default NewClient

