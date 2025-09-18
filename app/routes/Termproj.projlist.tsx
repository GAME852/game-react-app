import { Link } from "@remix-run/react";
import { myTermProj } from "./data/Termproject";

export default function ProjList () {
    return(
        <>
        <h1 className="mb-2 mx-auto text-center">ข้อมูลโปรเจค </h1>
        <p>
            {
                myTermProj.map((tpObj , index) => 
                <li key={index} className="mb-2 mx-auto text-center">
                 โปรเจควิชา {tpObj.tpSubject}    
                 <Link to={`/termproj/proj/${tpObj.tpID}`} className="text-red-400 hover:underline"> View </Link>
                </li>
                )
            }
            </p>
            </>
    );
}