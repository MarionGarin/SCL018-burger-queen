import {Link} from 'react-router-dom';
import React from 'react';
import Footer from '../Commons/Footer'
import styles from '../../Styles/Welcome.module.css';




const Welcome = () => {
    return (
      <div className={styles.welcomeView}>

        <section className={styles.welcome}>
            <p className={styles.welcomeMessage}>¡Te damos la bienvenida! A continuación, elige la opción que corresponda según tu equipo de trabajo:</p> 
        </section>
        <section className={styles.welcomeBtns}>
            <div className= 'btn-group'> <Link to='/waiters' className={`btn btn-primary btn-lg ${styles.waiters}`}>SALÓN </Link> </div>
            <div className= 'btn-group'> <Link to='/kitchen' className={`btn btn-primary btn-lg ${styles.kitchen}`}>COCINA </Link> </div>
        </section>
        
        <Footer />

      </div>
    )
  }
  
  export default Welcome

  
  