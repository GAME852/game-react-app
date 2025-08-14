export default function Profile(){
    return (
    <>
        <h1 className="text-2xl text-red-600 text-center bg-purple-100 font-bold">Profile</h1>
        <div className="p-10 rounded">
            <img src="/images/Sung-Jin-Woo-Wallpaper-8.jpeg" className="rounded-full w-32 shadow-lg border-4 border-purple-600 mx-auto" />
            <h2 className="text-xl text-center text-red-600 font-bold m-5">About Me</h2>
            <p className="text-regular text-lg border-2 rounded w-1/2 p-5"> Name: Warit Niyomthai <br />
                                                 Age: 19 years old   <br />
                                                 NickName: Game <br />
                                                 Address: pathum thani 12120  <br />
            </p>
             
        </div>
    </>
    );
}