import Header from "./components/Header";
import Footer from "./components/Footer";
export default function MyTermProjecr(){

    const myPage ="tiger term project";
    const myName ="Sakda Prasert";
    const myStudID ="026730491013-1";
    const myTermProj = [
    {
        tpID : 1,
        tpTitle: "Wed Technology",
        tpSudject:"พัฒนาเว็บไซต์ [เกี่ยวกับ ม.จักรพงษ์ภูวนารถ]",
        tpCover: "/images/Screenshot 2025-07-31 100745.png",
        tpUrl: "http://busitlab.rmutto.ac.th/~026730491013-1/GameDokapong/"
    
    },
    {
        tpID : 2,
        tpTitle: "Wed Technology ",
        tpSudject:"พัฒนาเว็บไซต์ [เกี่ยวกับ ม.จักรพงษ์ภูวนารถ] ",
        tpCover: "/images/Screenshot 2025-07-31 100745.png",
        tpUrl: "http://busitlab.rmutto.ac.th/~026730491013-1/GameDokapong/"
    },

    {
        tpID : 3,
        tpTitle: "Wed Technology [เกี่ยวกับ ม.จักรพงษ์ภูวนารถ]",
        tpSudject:"พัฒนาเว็บไซต์ [เกี่ยวกับ ม.จักรพงษ์ภูวนารถ] ",
        tpCover: "/images/Screenshot 2025-07-31 100745.png",
        tpUrl: "http://busitlab.rmutto.ac.th/~026730491013-1/week05/ch03_1013_1.html", 
        tpTeam: true
    },
];
    const tpSingle = myTermProj.filter(tptmp=>
        tptmp.tpTeam === true
    );
const TeamProj = myTermProj.map((tpObj , index ) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300"key = {index}>
<div className="w-32 p-1">
<img src={tpObj.tpCover} className="w-full rounded-full" title={tpObj. tpSudject+"(ID:)"+tpObj.tpID+")"} />
</div>
<div className="p-4 col-span-3 mb-auto">
<h2 className="text-lg font-semibold text-gray-800">{tpObj.tpSudject}</h2>
<p className="text-gray-600 text-sm mt-2">{tpObj.tpTitle}</p>
<ItemTeam isTeam = {tpObj.tpTeam} />
</div>
<div className="p-4 mb-auto">
<a href={tpObj.tpUrl} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 
px-10 py-2">Preview</a>
</div>
</div>
);
    return(
        <>
        <Header messenger ={myPage}/>
        <p className="text-xl m-3 text-center">
            Name: {myName} Studert ID :{myStudID}
        </p>
        <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 m-6 ">
        {TeamProj}
        </div>
        <Footer messenger = "@ 2525 Sakda - "/>
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