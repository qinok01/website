import React from "react"
import HeaderBar from "../components/HeaderBar"


const resume = require('./resume.json');

export default function Experience() {

    const resumeComponent = (data) => {
        return(
            <div className="flex align-center">
            <div className="w-5/6">
                <h1 className= "font-semibold p-3 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl m-4">{data.title}</h1>
                
                <ul className= "text-md font-normal sm:text-md md:text-lg lg:text-xl xl:text-2xl text-left m-4 list-disc">
                {data.info && data.info.map((datum)=>{
                    return (<li className="ml-14 mr-14 mt-2">{datum}</li>)

                })}
                </ul>

            </div >
                <img  className="w-1/5 h-1/5 m-3 mt-1  mr-20 rounded-md " src={data.img}/>
            </div>
        )

    }


    return(
        <div className= "animate-fade text-white bg-gradient-to-r from-black from-75% via-indigo-500 to-black min-h-screen">
        
        <HeaderBar/>
        
        
        
        <div className="max-w-screen-2xl mx-auto mt-16">

        

            {resume && resume.details.map(resumeComponent)}



        </div>
        </div>

    )

}