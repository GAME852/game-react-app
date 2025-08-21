//Filename: Lab03.tsx
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

 export default function MyProfile(){
    return (
    <>
        <Profile />
        <h2 className="text-xl text-center text-red-600 font-bold m-5">Contact</h2>
    <div className="flex items-center m-5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">

        <Contact 
        label="urfxvaries_" 
        link="https://www.instagram.com/urfxvaries_/?next=%2F" 
        icon="/images/Ig.png"/>

        <Contact 
        label="urfxvaries_" 
        link="https://www.instagram.com/urfxvaries_/?next=%2F" 
        icon="/images/twitch.png"/>

        <Contact 
        label="urfxvaries_" 
        link="https://www.instagram.com/urfxvaries_/?next=%2F" 
        icon="/images/twitter.png"/>

        </div>
    </div>
        <div  className="ps-5 pe-5 pt-3 pb-3 bg-indigo-300 rounded w-20 flex justify-center mt-5">
        <a href="/">Back</a>
        </div>
            <Footer
            messenger = "@ 2025 Warit - "/>
    </>
    );
 }