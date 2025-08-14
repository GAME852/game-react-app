import Header from "./components/Header";
import Footer from "./components/Footer";
import { myTermProj } from "./data/Termproject";
import { useState } from "react";

export default function MyTermProjecr(){

    const [isTeam, setIsTeam] = useState(null);

    const handleTeam = (isTeam: any) => {
        setIsTeam(isTeam);
    }

    const myPage ="Game term project";
    const myName ="Warit Niyomthai";
    const myStudID ="026730491011-5";
    
    const tpSingle = myTermProj.filter(tptmp=> {
        if(isTeam === null)
           return tptmp.tpTeam === true || tptmp.tpTeam === false
        else
            return tptmp.tpTeam === isTeam;
    }
        
    );

    const handleClick_b = (tpID: any, ind: any) => {
        let myOut = "";
        let myObj = myTermProj[ind];

        myOut+="[ข้อมูลโปรเจค]\n";
        myOut+="รหัส (ID): "+myObj.tpID+"\n";
        myOut+="หัวข้อ (Title): "+myObj.tpTitle+"\n";
        myOut+="รายวิชา (Subject): "+myObj.tpSubject+"\n";
        myOut+="หน้าปก (Cover): "+myObj.tpCover+"\n";
        myOut+="ลิ้งค์ (URL): "+myObj.tpUrl+"\n";
        myOut+="มีกี่คน (Team): "+myObj.tpTeam+"\n";

        myOut+="-- Thank you --";

        //alert("คุณได้เลือกโปรเจค รหัส: "+tpID+"!!")
        alert(myOut);
    }

const TeamProj = tpSingle.map((tpObj , index) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300"key = {index}>
<div className="w-32 p-1">
<img src={tpObj.tpCover} className="w-full rounded-full" title={tpObj. tpSubject+"(ID:)"+tpObj.tpID+")"} />
</div>
<div className="p-4 col-span-3 mb-auto">
<h2 className="text-lg font-semibold text-gray-800">{tpObj.tpSubject}</h2>
<p className="text-gray-600 text-sm mt-2">{tpObj.tpTitle}</p>
<ItemTeam isTeam = {tpObj.tpTeam} />
</div>
<div className="p-4 mb-auto">
<a href={tpObj.tpUrl} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 
px-10 py-2" onClick={() => handleClick_b(tpObj.tpID,index)}>Preview</a>
</div>
</div>
);
    return(
        <>
        <Header messenger ={myPage}/>
        <p className="text-xl m-3 text-center">
            Name: {myName} Studert ID :{myStudID}
        </p>

        <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 flex justify-center grid grid-cols-3 gap-2">
        <button type="button" className="w-50 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
        onClick={() => handleTeam(null)}>
        [A] All
        </button>

        <button type="button" className="w-50 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" 
        onClick={() => handleTeam(true)}>
        [T] Team
        </button>

        <button type="button" className="w-50 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => handleTeam(false)}>
        [S] Single
        </button>
        </div>

         <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 ">
        {TeamProj}
        </div>
        <h3 className="w-1/2 grid mx-auto h-100 overflow-hide rounded-2xl flex justify-center">
            โปรเจคมีจำนวน : {myTermProj.length} รายการ
        </h3>
        <Footer messenger = "@ 2525 Warit - "/>
           </>
    );

}

function ItemTeam ({isTeam}) {
if(isTeam)
    return    <p>
              Grop
        </p>
    return (<p>
        Ungrop  
    </p>);
}