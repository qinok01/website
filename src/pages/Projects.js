import React from "react"
import HeaderBar from "../components/HeaderBar"

const projects = require('./projects.json');

export default function Experience() {

    const projectComponent = (data) => {
        return(
            <div>
                <h1 className= "font-semibold text-2xl m-4">{data.title}</h1>
                
                <ul className= "font-normal text-xl m-4 list-disc">
                {data.info && data.info.map((datum)=>{
                    return (<li className="ml-14 mr-14 mt-2">{datum}</li>)

                })}
                </ul>
            </div>
        )

    }


    return(
        <div className="animate-fade text-white bg-gradient-to-r from-black from-75% via-indigo-500 to-black min-h-screen pb-4">
        
        <HeaderBar/>
        
        
        
        <div className="max-w-screen-xl mx-auto">

        
            <h2 className="text-center font-semibold text-4xl mt-10" >Projects</h2>
            <div className="w-5/6">
                {projects && projects.details.map(projectComponent)}
            </div>


        </div>
        </div>

    )

}