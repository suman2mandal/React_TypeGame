import React, {useState} from 'react'
import {IoIosNotificationsOff, IoMdNotificationsOutline} from "react-icons/io";
// import OIG from './'
function Header() {
  const [icon,setIcon]=useState(true);

  const handleicon=()=>{
    setIcon(!icon);
    console.log(icon);
  }
  return (
    // <div>Header</div>
      <>
        <div className="row d-flex justify-content-between  align-items-center">
          <div className="d-flex align-item-center col-2 p-4">
            <span><img src="./images/OIG2.jpg" alt="Logo Here" style={{height:"50px",weight:"50px",borderRadius:"50%",borderTopRightRadius:"0%"}}/></span>
            <h3 style={{color:"darkgray",fontWeight:"bold"}}>SpaceType</h3>
          </div>
          <div className="col-2">
            {icon ? <IoMdNotificationsOutline className={"notification"} onClick={handleicon}/> : <IoIosNotificationsOff className={"notification"} onClick={handleicon}/>}
          </div>
        </div>
      </>
  )
}

export default Header