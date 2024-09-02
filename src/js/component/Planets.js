import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardComponent } from "../component/CardComponent";

export const Planets = () => {
    
    const { store, actions } = useContext(Context);


    return (
        <>
            <p className="text-warning text-center display-1">Planets</p>
            <div className="d-flex mb-5 flex-wrap text-center justify-content-center">
                {store.planets && (
                    store.planets.map((planet, index) => (
                        <div className='swiper-slide-paginas planets ps-4 pt-3 fade-in'>
                            <CardComponent key={index} title={planet.name} favourite={store.favourites?.includes(planet.name)? '' : () => actions.addFavourite(planet.name)} 
                                heart={store.favourites?.includes(planet.name)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>} info={''} PersonalPage={`/planetInfo/${planet.uid}/${planet.name}`} img={
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
                    )))}
            </div>
 
        </>
    )
}