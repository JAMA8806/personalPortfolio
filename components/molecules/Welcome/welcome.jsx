import React from 'react';
import styles from './welcome.module.css';
import { Icons } from '../../atoms/icons/icons';
import { HomeRepairServiceOutlined } from '@mui/icons-material';

export const Welcome = () => {
  return (
    <div className={styles.welcomeContainer}>
      <h1
      className={styles.h1}
      >Welcome to my <span className={styles.span}>Portfolio!</span></h1>
      <p className={styles.p}>
      I'm <span className={styles.span}>thrilled</span> to have you here. Explore my work and feel free to reach out if you have any questions or feedback. Enjoy your visit! 
      </p>
      <Icons
      style={{ fill: 'red' }}></Icons>

      <HomeRepairServiceOutlined
      color='success'></HomeRepairServiceOutlined>

    </div>
  )
}
