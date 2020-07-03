import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

import Header from '../../components/Header';
import RecentsProductsAdded from '../../components/RecentsProductsAdded';
import MenuOptions from '../../components/MenuOptions';

import s from './Dashboard.module.scss';
import AddProducts from '../../components/AddProducts/AddProducts';

const Dashboard = ({ user }) => {
  const { path } = useRouteMatch();
  return (
    <div className={s.dashboard}>
      <div className={s.container}>
        {/*
          <div className={s.menu}>
            <Menu />
          </div>
        */}
        <div className={s.body}>
          <div className={s.header}>
            <Header user={user} />
          </div>
          <Switch>
            <Route exact path="/">
              <MenuOptions />
              <RecentsProductsAdded />
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProducts />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
