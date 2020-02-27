import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Inventory from '../../components/Inventory';

import s from './Dashboard.module.scss';

const Dashboard = ({ user }) => (
  <div className={s.dashboard}>
    <div className={s.container}>
      <div className={s.menu}>
        <Menu />
      </div>
      <div className={s.body}>
        <div className={s.header}>
          <Header user={user} />
        </div>
        <Inventory />
      </div>
    </div>
  </div>
);

Dashboard.propTypes = {
  user: PropTypes.shape({}),
};

Dashboard.defaultProps = {
  user: {},
};

export default Dashboard;
