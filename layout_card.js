import React,{useState,useEffect} from "react";
import './layout_card.css'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";



export function Layout_card(){
    const[angle,setAngle]=useState([])
    useEffect(()=>{
    fetch("/layout_card.json")
    .then(add=>add.json())
    .then(hor=>setAngle(hor))
})

    return(

        <>

        <div className="background ">

            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <button class="btn my-2 my-sm-0 text-light find_candidates" type="submit">Find Candidates</button>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link my-2 px-3 text-light" href="#">Find Jobs<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link my-2 text-light" href="#">Find Companies<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <FontAwesomeIcon icon={faBell} className="bell "/>    
                <button class="btn   mx-3 my-sm-0" type="submit">Login</button>
                <button class="btn   my-sm-0 find_candidates text-light" type="submit">Register</button>
                </form>
                
            </div>
            </nav>
            <div className="container-fluid py-5">
                <h1 className="text-center  heading pt-lg-5 pb-lg-3 ">Find the candidates as per your requirements</h1>
                <div className="cent pb-lg-5 ">
                    <div className="row bg-light p-2 justify-content-center w-75 bord">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="p-2 mt-1"/>
                        <input className="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Job Title / Keyword"/>
                        <FontAwesomeIcon icon={faLocationDot} className="p-2 mt-1" />
                        <input className="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Add Country / City"/>
                        <button className="btn profilemenubtn2 heading my-2 px-5 my-sm-0" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid row justify-content-around p-3">
           
            <button className="bord "><a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="Experience" aria-expanded="false">
            Experience</a></button>
            <button className="bord "><a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="HTML/CSS" aria-expanded="false">
            HTML/CSS</a></button>
            <button className="bord "><a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="Bangalore" aria-expanded="false">
            Bangalore</a></button>
            <button className="bord "><a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="UI/UX Designer" aria-expanded="false">
            UI/UX Designer</a></button>
            <button className="bord "><a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="Gender" aria-expanded="false">
            Gender</a></button>
            <button className="bord "><a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="Age" aria-expanded="false">
            Age</a></button>
        </div>

        <div className="continer-fluid">
            <div className="row justify-content-around">
                {
                    angle.map((value,index)=>(
                        <>
                        <div className="card mx-4 my-4 col-lg-2 text-center">
                              <img src={value.Image} className="card-img-top"/>
                            <div className="card-body">
                                <h1>{value.Name}</h1>
                                <h6>{value.Job}</h6>
                                <button className="btn-sm bord">View</button>

                            </div>
                        </div>
                    
                        </>
                    ))
                }
                 
            </div>
        </div>

        </>
    );
}
