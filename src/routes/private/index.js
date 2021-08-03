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
import React,{useState,useEffect} from "react";
const PrivateRouteMain=()=>{    
    const [status,SetStatus]=useState(false)
    const [data,SetData]=useState(false)
useEffect(() => {
    !status&&
    CheckAuth().then(res=>
        {  console.log('res: ', res);
          SetData(res);
          SetStatus(true)
      }).then(err=>{
          console.error(err);
      SetStatus(true)}
      );
}, [status])
 
        
    return(
        <>
        {
            !status?
            <Loading/>:
            <PrivateRoute auth={data}>
            <Switch>
           <Route path="/123" exact component={Title}/>
           <Route path="/" exact component={HomePage}/>
           <Route path="/Profile" exact component={Profile}/>
            <NotFound/>
            </Switch>
        </PrivateRoute>
        }
        </>
    )
}

export default PrivateRouteMain