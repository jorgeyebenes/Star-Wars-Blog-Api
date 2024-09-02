import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardComponent } from "../component/CardComponent";


export const Vehicles = () => {
    const { store, actions } = useContext(Context);


    return (
        <>
        <p className="text-warning text-center display-1">Vehicles</p>
        <div className="d-flex mb-5 flex-wrap text-center justify-content-center">
                    {store.vehicle && (
                        store.vehicle.map((vehicle, index) => (
                            <div className='swiper-slide-paginas vehicles ps-4 pt-3'>
                                <CardComponent key={index} title={vehicle.name} favourite={store.favourites?.includes(vehicle.name)? '' : () => actions.addFavourite(vehicle.name)} corazon={store.favourites?.includes(vehicle.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>} PersonalPage={`/info_vehicle/${vehicle.uid}/${vehicle.name}`} info={''} img={
                            vehicle.name === "Sand Crawler" ? 'https://starwars-visualguide.com/assets/img/vehicles/4.jpg'
                            : vehicle.name === "X-34 landspeeder" ? 'https://starwars-visualguide.com/assets/img/vehicles/7.jpg'
                            : vehicle.name === "T-16 skyhopper" ? 'https://starwars-visualguide.com/assets/img/vehicles/6.jpg'
                            : vehicle.name === "TIE/LN starfighter" ? 'https://starwars-visualguide.com/assets/img/vehicles/8.jpg'
                            : vehicle.name === "Snowspeeder" ? 'https://starwars-visualguide.com/assets/img/vehicles/14.jpg'
                            : vehicle.name === "AT-AT" ? 'https://starwars-visualguide.com/assets/img/vehicles/18.jpg'
                            : vehicle.name === "TIE bomber" ? 'https://starwars-visualguide.com/assets/img/vehicles/16.jpg'
                            : vehicle.name === "AT-ST" ? 'https://starwars-visualguide.com/assets/img/vehicles/19.jpg'
                            : vehicle.name === "Storm IV Twin-Pod cloud car" ? 'https://starwars-visualguide.com/assets/img/vehicles/20.jpg'
                            : vehicle.name === "Sail barge" ? 'https://starwars-visualguide.com/assets/img/vehicles/24.jpg'
                            : ''
                            }
                                />
                            </div>
                        )))}
                </div>
           

        </>
    )
}