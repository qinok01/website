import React from "react"
import profile from'../assets/profile.jpg';
import HeaderBar from "../components/HeaderBar";

import Animation from "../components/Animation";


export default function Home() {



    return(

        <div className="animate-fade  text-white bg-gradient-to-r from-black from-75% via-indigo-500 to-black min-h-screen font-sans mx-auto">
        <HeaderBar/>
        <div className="">
        <div className=" mx-[10%]">  
        <div className="flex">
        <img  className="mr-auto w-1/4 h-1/4 shadow-lg shadow-indigo-500/40 m-7 rounded-md justify-start" src={profile}/>

        <div className="w-3/4 pt-2">
        <p className="p-3 text-lg font-semibold m-5 mt-5 sm:text-2xl md:text-3xl lg:text-4xl text-left">
            <Animation/>
        </p>
        </div>
        </div>
        <div className="text-lg m-5 mt-5 sm:text-xl md:text-2xl lg:text-3xl xl:4xl text-left font-medium  ">
        <p className="p-4 pl-12 pr-12">Academically, I'm interested in how society functions as a system, algorithmic or statistical approaches to games, and neuromorphic computing. With my interests being so broad, I am looking to opportunities within a wide variety of fields including but not limited to Public Policy Think Tanks, Materials Research, Software Development or Quant-Trading/Research. 
        </p>

        <p className="p-4 pl-12 pr-12">At Brown you will probobly find me on the 12th floor of the Sciences Library or playing Poker wherever there are cash games. Elsewhere you will likely find me forecasting, playing miscellaneous strategy games or nose deep in a book detailing the history of an obscure political event. 
        </p>
        

        <p className="p-4 pl-12 pr-12">I'm excited to keep learning, meeting new people and exploring new games! </p>

        <p></p>
        </div>
        </div>
        </div>
        </div>
    )

}