import { myTermProj } from "./data/Termproject";
import { useParams } from "@remix-run/react";

export default function ProjView(){
    const { tpid } = useParams();

    const tpTmp = myTermProj.filter((item) => {
        return item.tpID === Number(tpid) ;
    }).map((tpObj , index) => 
    <>
         <p> รหัสโปรเจค {tpObj.tpID} </p>
         <p> รายวิชา {tpObj.tpTitle} </p>  
         <p> รายละเอียด {tpObj.tpSubject} </p>    
         <p> หน้าปก {tpObj.tpCover} </p> 
         <p> ลิ้งค์ {tpObj.tpUrl} </p>   
         <p> กลุ่ม {tpObj.tpTeam} </p>  
    </> 
    );
        if(tpTmp.length === 0){
            return "***ไม่พบข้อมูลโปรเจคที่คุณเลือก***";
        }
    return(
        <>
        <h1>Project ID: {tpid}</h1>
        {tpTmp}

        <a href="/termproj/projlist" className="text-2x1 text-funchsia-400 text-center bg-red-400">Back</a>
        </>
    )
}