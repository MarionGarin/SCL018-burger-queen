import React from 'react'
import leaves from '../../assets/img/leaves.png'
import styles from '../../Styles/Footer.module.css'

const Footer = () => {
    return ( 
<section className={styles.commonFooter}>
<img className={styles.logo} src={leaves} alt="logo from the store with the shape of three leaves" />
</section>

)
}
 
export default Footer