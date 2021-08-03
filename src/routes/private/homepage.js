import React,{useEffect,useState} from "react";
import axios from "axios";
import MasterPageLayout from "../../components/masterPage";
import { CreateToken,CreateHeader } from "../../utils/createToken";
import Loading from "../../components/Loading";
import Card from '../../components/Card';
import { CurrentDateTimeInString } from "../../utils/CheckCurrentDateTime";

const HomePage=()=>{
    let userid=JSON.parse(localStorage.getItem('user')).UserId
    let config=CreateHeader()
    const [userName, setUserName] = useState('')
    const [loading, setloading] = useState(true)
    const [time, setTime] = useState('')
    useEffect(()=>{
        axios.get(`/api/getusercontact/${userid}`,config).then(res=>{
            let ContactData=res.data[0]
            if(res.status===200){
                setUserName(ContactData.username)
                setloading(false)
                setTime(CurrentDateTimeInString())
            }else{
                setloading(false)
            }
        })
    })
    return(
        <>
        {
            loading?<Loading/>:
        <MasterPageLayout>
            <div className="bodyWrapper">
        <h1 className="titleText">
           {time}, {userName}
        </h1>
            </div>
        </MasterPageLayout>
        }
        </>
    )
}
export default HomePage