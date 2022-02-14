import React from 'react'
import styles from '../../Styles/Client.module.css'

const Client = () => {

const createData = (e)=> {
    
    e.preventDefault();
    alert('Se ha enviado a Firebase');

}
    return ( 
<div className={styles.clientInfo}>

        <form action='' onSubmit={createData}>
        <div>
         <label htmlFor='table'>Número de Mesa</label>
         <input 
         type='text' 
         name='table' 
         id='table'/>
       </div>

       <div>
         <label htmlFor='client'>Cliente</label>
         <input 
         type='text'
         name='client'
         id='client'/>
       </div>

       <div>
         <label htmlFor='takeOrder'>¿Para llevar?</label>
         <input
          type='text' 
          name='takeOrder'
          id='takeOrder'/>
       </div>


       <button type='submit'>Crear cliente</button>
       </form>
</div>

)
}
 
export default Client