import PrivateRoute from "../../utils/privateRoute";
import Title from "../../components/Title";
import {
    Route, Switch
  } from "react-router-dom";
import CheckAuth from "../../utils/authChecker";
import Loading from "../../components/Loading";
import NotFound from '../../components/NotFound';
import HomePage from "./homepage";
import Profile from "./Profile";
import MapPage from "./MapPage";
import PersonalPage from  './Personal'
import React,{useState,useEffect} from "react";
const PrivateRouteMain=()=>{    
    const [status,SetStatus]=useState(false)
    const [data,SetData]=useState(false)
useEffect(() => {
    !status&&
    CheckAuth().then(res=>
        { 
          SetData(res);
        
          SetStatus(true)
     
      }).then(err=>{
          console.error(err);
      SetStatus(true)}
      );
}, [status])
let Permisson= JSON.parse(localStorage.getItem('Permission')).permissions

        
    return(
        <>
        {
            !status?
            <Loading/>:
            <PrivateRoute auth={data}>
            <Switch>
           <Route path="/123" exact  component={props=><Title {...props}   />}/>
           <Route path="/" exact component={props=><HomePage {...props}  ACL={Permisson.home} />}  />
           <Route path="/Profile" exact component={Profile}/>
           <Route path="/Map" exact component={MapPage}/>
           <Route path="/personal" exact component={PersonalPage}/>
            <NotFound/>
            </Switch>
        </PrivateRoute>
        }
        </>
    )
}

export default PrivateRouteMain