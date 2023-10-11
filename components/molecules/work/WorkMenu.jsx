import { useState } from "react";
import styles from "./workExperience.module.css"
const Menu = ({handleOpcionClick}) => {
    const [selected, setSelected] = useState("Option4")
    
    const Click = (option)=>{
        handleOpcionClick(option)
        setSelected(option)
    }
  return (
    <div className={styles.menu}>
      <div className={`${styles.options} ${selected ==="Option4"? styles.selected : ''}`} onClick={() => Click('Option4')}><p>FrontEnd Trainee</p></div>
      <div className={`${styles.options} ${selected ==="Option3"? styles.selected : ''}`} onClick={() => Click('Option3')}><p>Technical Inspector</p></div>
      <div className={`${styles.options} ${selected ==="Option2"? styles.selected : ''}`} onClick={() => Click('Option2')}><p>Electronics Technitian</p></div>
      <div className={`${styles.options} ${selected ==="Option1"? styles.selected : ''}`} onClick={() => Click('Option1')}><p>TEFL Instructor</p></div>
    </div>
  );
};

export default Menu;
