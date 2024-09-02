import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



export const PlanetsInfo = () => {
    const { store, actions } = useContext(Context);
    const { id, planet_name } = useParams();

    useEffect(() => {
        actions.fetchPlanet(id)
    }, [id])

    const planet = store.singlePlanet.result ? store.singlePlanet.result.properties : null;

    if (!planet) {
        return <div className="text-light text-center fs-2">Uploading planets data...</div>;
    }

    return (
        <div>
            <h1 className="text-warning text-center display-1">{planet.name}</h1>
            <div className="d-flex gap-2 flex-wrap container-fluid tarjeta-info p-5 w-75 rounded">
                <div>
                    <img className="rounded" src={
                        planet.name === 'Tatooine' ? 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357'
                            : planet.name === 'Alderaan' ? 'https://starwars-visualguide.com/assets/img/planets/2.jpg'
                                : planet.name === 'Yavin IV' ? 'https://starwars-visualguide.com/assets/img/planets/3.jpg'
                                    : planet.name === 'Hoth' ? 'https://starwars-visualguide.com/assets/img/planets/4.jpg'
                                        : planet.name === 'Dagobah' ? 'https://starwars-visualguide.com/assets/img/planets/5.jpg'
                                            : planet.name === 'Bespin' ? 'https://starwars-visualguide.com/assets/img/planets/6.jpg'
                                                : planet.name === 'Endor' ? 'https://starwars-visualguide.com/assets/img/planets/7.jpg'
                                                    : planet.name === 'Naboo' ? 'https://starwars-visualguide.com/assets/img/planets/8.jpg'
                                                        : planet.name === 'Coruscant' ? 'https://starwars-visualguide.com/assets/img/planets/9.jpg'
                                                            : planet.name === 'Kamino' ? 'https://starwars-visualguide.com/assets/img/planets/10.jpg'
                                                                : ''
                    } />
                </div>
                <div className="fs-4 ms-5">
                    <p><strong>Climate:</strong> {planet.climate}</p>
                    <p><strong>Diameter:</strong> {planet.diameter} km</p>
                    <p><strong>Gravity:</strong> {planet.gravity}</p>
                    <p><strong>Population:</strong> {planet.population}</p>
                    <p><strong>Terrain:</strong> {planet.terrain}</p>
                    <p><strong>Water surface:</strong> {planet.surface_water} km</p>
                    <p><strong>Description:</strong> {store.singlePlanet.result.description}</p>
                    <div className="d-flex gap-4 align-items-start mt-5">
                        <Link to="/" className="btn btn-warning fw-bold">Back to Home</Link>
                        <button onClick={store.favourites?.includes(planet.name) ? null : () => actions.addFavourite(planet.name)} className="btn btn-warning">{store.favourites?.includes(planet.name)
                            ? <i className="fa-solid fa-heart"></i>
                            : <i className="fa-regular fa-heart"></i>}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}