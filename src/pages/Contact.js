import React from "react"
import HeaderBar from "../components/HeaderBar"

export default function Contact() {
    return(
        <div >
        <div className="animate-fade text-white bg-gradient-to-r from-black from-75% via-indigo-500 to-black min-h-screen">
        <HeaderBar/>
        <div className="max-w-screen-xl mx-auto">  
            <h2 className="text-center font-semibold text-4xl mt-10" >Contact Me</h2>
            <p className="text-center font-normal text-2xl mt-10">Email: Noah_h_kim@brown.edu</p>
            <p className="text-center font-normal text-2xl mt-10"><a href="https://github.com/qinok01">Github</a></p>
            <p className="text-center font-normal text-2xl mt-10"><a href="https://www.linkedin.com/in/noah-kim-4a9b89228/">LinkedIn</a></p>
            

        </div>  
        </div>
        </div>
    )

}