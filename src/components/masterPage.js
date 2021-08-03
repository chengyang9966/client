import Navbar,{SideMenu} from './navbar';

const MasterPageLayout=(props)=>{
    return(
        <div style={{display:'flex'}}>
            <div style={{width:'10%',backgroundColor:'white',minWidth:'170px'}}>
           <SideMenu/>
            </div>
            <div style={{width:'90%',backgroundColor:'#f3f5f3',height:'100%'}}>
           {props.children}
            </div>
        </div>
    )
}

export default  MasterPageLayout