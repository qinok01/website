import React from "react"
import HeaderBar from "../components/HeaderBar"


const resume = require('./resume.json');

export default function Experience() {

    const resumeComponent = (data) => {
        return(
            <div className="flex align-center">
            <div className="w-5/6">
                <h1 className= "font-semibold text-2xl m-4">{data.title}</h1>
                
                <ul className= "font-normal text-xl m-4 list-disc">
                {data.info && data.info.map((datum)=>{
                    return (<li className="ml-14 mr-14 mt-2">{datum}</li>)

                })}
                </ul>

            </div >
                <img  className="w-1/6 h-1/6 m-3 mt-1  mr-20 rounded-md " src={data.img}/>
            </div>
        )

    }


    return(
        <div className= "animate-fade text-white bg-gradient-to-r from-black from-75% via-indigo-500 to-black min-h-screen">
        
        <HeaderBar/>
        
        
        
        <div className="max-w-screen-xl mx-auto">

        
            <h2 className="text-center font-semibold text-4xl mt-10" >Experience</h2>
            {resume && resume.details.map(resumeComponent)}



        </div>
        </div>

    )

}