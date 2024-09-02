import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


export const VehiclesInfo = () => {
    const { store, actions } = useContext(Context);
    const { id, vehicles_name } = useParams();

    useEffect(() => {
        actions.fetchVehicles(id)
    }, [id])

    const vehicles = store.singleVehicle.result ? store.singleVehicle.result.properties : null;

    if (!vehicles) {
        return <div className="text-light text-center fs-2">Uploading vehicles data...</div>;
    }

    return (
        <div>
            <h1 className="text-warning text-center display-1">{vehicles.name}</h1>
            <div className="d-flex gap-2 flex-wrap container-fluid tarjeta-info p-5 w-75 rounded">
                <div>
                    <img className="rounded" src={
                       vehicles.name === "Sand Crawler" ? 'https://starwars-visualguide.com/assets/img/vehicles/4.jpg'
                       : vehicles.name === "X-34 landspeeder" ? 'https://starwars-visualguide.com/assets/img/vehicles/7.jpg'
                       : vehicles.name === "T-16 skyhopper" ? 'https://starwars-visualguide.com/assets/img/vehicles/6.jpg'
                       : vehicles.name === "TIE/LN starfighter" ? 'https://starwars-visualguide.com/assets/img/vehicles/8.jpg'
                       : vehicles.name === "Snowspeeder" ? 'https://starwars-visualguide.com/assets/img/vehicles/14.jpg'
                       : vehicles.name === "AT-AT" ? 'https://starwars-visualguide.com/assets/img/vehicles/18.jpg'
                       : vehicles.name === "TIE bomber" ? 'https://starwars-visualguide.com/assets/img/vehicles/16.jpg'
                       : vehicles.name === "AT-ST" ? 'https://starwars-visualguide.com/assets/img/vehicles/19.jpg'
                       : vehicles.name === "Storm IV Twin-Pod cloud car" ? 'https://starwars-visualguide.com/assets/img/vehicles/20.jpg'
                       : vehicles.name === "Sail barge" ? 'https://starwars-visualguide.com/assets/img/vehicles/24.jpg'
                       : ''
                    } />
                </div>
                <div className="fs-4 ms-5">
                    <p><strong>Model:</strong> {vehicles.model}</p>
                    <p><strong>Class:</strong> {vehicles.vehicle_class}</p>
                    <p><strong>Manufacturer:</strong> {vehicles.manufacturer}</p>
                    <p><strong>Cost:</strong> {vehicles.cost_in_credits} créditos</p>
                    <p><strong>Length:</strong> {vehicles.length} mts.</p>
                    <p><strong>Crew:</strong> {vehicles.crew}</p>
                    <p><strong>Passengers:</strong> {vehicles.passengers}</p>
                    <p><strong>Max atmospherig speed:</strong> {vehicles.max_atmosphering_speed}</p>
                    <p><strong>Cargo capacity:</strong> {vehicles.cargo_capacity}</p>
                    <p><strong>Consumables:</strong> {vehicles.consumables}</p>
                    <p><strong>Description:</strong> {store.singleVehicle.result.description}</p>
                    <div className="d-flex gap-4 align-items-start mt-5">
                        <Link to="/" className="btn btn-warning fw-bold">Back to Home</Link>
                        <button onClick={store.favourite?.includes(vehicles.name) ? null : () => actions.addFavourite(vehicles.name)} className="btn btn-warning">{store.favourite?.includes(vehicles.name)
                            ? <i className="fa-solid fa-heart"></i>
                            : <i className="fa-regular fa-heart"></i>}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}