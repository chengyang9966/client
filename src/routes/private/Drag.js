import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import HeaderText from "../../components/HeaderText";

const Drag=(props)=>{
    console.log('props: ', props);
    const [loading,setLoading]=useState(false)
    return(
        <>
        <HeaderText profile={e=>console.log(e)}>
        <div>HELLOO</div>
        </HeaderText>
         {loading&&<Loading/>}
         </>
    )
}

export default Drag