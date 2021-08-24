import React, { useState } from "react";
import {SideMenu} from './navbar';
import Dropdown from './DropdownSide'
const MasterPageLayout=(props)=>{

    return(
        <div style={{display:'flex'}}>
            <div style={{width:'10%',backgroundColor:'white',minWidth:'170px'}}>
           <SideMenu/>
            </div>
            <div className="Container-Right">
            <Dropdown name={props.name} email={props.email}/>
           {props.children}
            </div>
        </div>
    )
}

export default  MasterPageLayout