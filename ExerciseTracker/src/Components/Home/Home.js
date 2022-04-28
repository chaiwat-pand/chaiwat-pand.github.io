import React from 'react'
import './Home.css'
import Activity from '../Activity/Activity'
import RecordActivity from '../DataProfile/RecordActivity';
import Profile from '../Profile/Profile';

function Home() {


  return (
    <div className="record-box-main">

      <div className='userAndAddTop'>
        <Profile />
        <Activity />
      </div>
      <RecordActivity />
    </div>
  )
}
export default Home;