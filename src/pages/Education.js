import React from "react"
import HeaderBar from "../components/HeaderBar"
import brown from "../assets/brown.png"
import greenwich from "../assets/gwichHigh.png"

export default function Education() {
    return( 
        <div className="animate-fade text-white bg-gradient-to-r from-black from-75% via-indigo-500 to-black min-h-screen">
        <HeaderBar/>
        <div className="max-w-screen-2xl mx-auto">
        <div className="flex">
        <div className="w-1/1 md:w-2/3 pt-2">
        <p className="p-3 text-xl font-semibold mt-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
            Brown University
        </p>
        <p className="p-3 text-md font-normal sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center leading-7">
           B.S. Mathematics-Computer Science & B.A. Physics Class of 2027 <br/>
           Quant Trading @ Brown Analyst, Brown Investment Group Analyst, Brown Political Review Staff Writer<br/>
           GPA: 4.0/4.0
           

        </p>
        </div>
        <img  className="hidden md:block w-2/7 h-2/7 m-7 mt-16 mr-5 rounded-md justify-start" src={brown}/>
        </div>

        <div className="flex mt-9">
        <div className="w-1/1 md:w-2/3 pt-2">
        <p className="p-3 text-xl font-semibold mt-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
            Greenwich High School
        </p>
        <p className="p-3 text-md font-normal sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center leading-7">
           High School Diploma <br/>
           President of Cyberpatriot Team, Science Team.<br/> 
           State Cyberpatriot champion, State Math League Champion, US Earth Science Olympiad Top 40<br/>
           Nominated as top science student out of ~650 in class of 2023 <br/>
           GPA: 4.8/4.0
           

        </p>
        </div>
            <img  className="hidden md:block w-2/7 h-2/7 m-7 mt-4 mr-15 rounded-md justify-start" src={greenwich}/>
        </div> 
           

        </div>
        </div>
    )

}