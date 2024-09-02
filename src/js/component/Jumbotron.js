import React from "react";
import yoda_jbtron from "/workspaces/Star-Wars-Blog-Api/src/img/yoda_jbtron.png";
import "/workspaces/Star-Wars-Blog-Api/src/styles/jumbotron.css"


export const Jumbotron = () => {

    return (

        <div className="container-fluid border-box d-flex flex-column">
            
                <div className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="text-h1 display-4 fw-bold text-body-emphasis">MAY THE FORCE BE WITH YOU</h1>
                    <div className="col-lg-6 mx-auto">
                    <p className="text-under-title lead mb-4">Star Wars web-app BLOG using React & SWAPI</p>
                    </div>
                    <div className="overflow-hidden">
                    <div className="container-imgyoda container px-5">
                    <img src={yoda_jbtron} className="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                    </div>
                    </div>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                    Quotes of Yoda
                    </a>
                    </div>
                </div>







        </div>
    )
}