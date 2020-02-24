import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";


import styles from './Dashboard.module.scss';


import Header from "../../components/Header";
import Menu from "../../components/Menu";

const Dashboard = ({ user }) => {
  const [distribution, changeDistribution] = useState(false);
  const [isCloseMenu, setOpenMenu] = useState(false)
  return (
    <div className={styles.dashboard}>
      <div className={`${styles.gridContainer} ${distribution && styles.headerBig} ${isCloseMenu && styles.menuClose}`}>
        <div className={styles.header}>
          <Header
            user={user}
            changeDistribution={changeDistribution}
            distribution={distribution}
          />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuSide} onClick={()=> setOpenMenu(!isCloseMenu)}>
            {isCloseMenu && <div className={styles.close}><FaArrowRight color={'white'}/></div>}
            {!isCloseMenu && <div className={styles.open}><FaArrowLeft color={'white'}/></div>}
          </div>
          <Menu />
        </div>
        <div className={styles.body}>
          Body
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
