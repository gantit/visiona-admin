import React from 'react';
import './Dashboard.scss';

import Header from "../../components/Header";

const Dashboard = ({user}) => {
  return (<Header user={user}/>)
};

export default Dashboard;
