/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feeds from '../../Components/Feed/Feeds';
const Home = ({sidebar}) => {
  return (
    <>
    <Sidebar sidebar={sidebar}/>
    <div className={`container ${sidebar?"":'large-container'}`}><Feeds/></div>
    </>
  )
}

export default Home;