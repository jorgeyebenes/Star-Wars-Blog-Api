import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardComponent } from "../component/CardComponent";
import "/workspaces/Star-Wars-Blog-Api/src/styles/home.css";


export const Characters = () => {
    const { store, actions } = useContext(Context);

    return (
        
        <>
            <p className="text-warning text-center display-1">Characters</p>
            <div className="">
            {store.character && (
                    store.character.map((character, index) => (
                        <div className='ps-4 pt-3 characters fade-in'>
                            <CardComponent key={index} title={character.name} paginaIndividual={`/info_character/${character.uid}/${character.name}`} favourite={store.favoritos?.some(fav => fav.id === character.uid) ? null : () => actions.addFavourite(character.name, character.uid, character.description)} 
									corazon={store.favoritos?.some(fav => fav.id === character.uid)
										? <i className="fa-solid fa-heart"></i>
										: <i className="fa-regular fa-heart"></i>} info={''} PersonalPage={`/characterInfo/${character.uid}/${character.name}`} img={
                                character.name === "Luke Skywalker" ? 'https://starwars-visualguide.com/assets/img/characters/1.jpg'
                                    : character.name === "C-3PO" ? 'https://starwars-visualguide.com/assets/img/characters/2.jpg'
                                        : character.name === "R2-D2" ? 'https://starwars-visualguide.com/assets/img/characters/3.jpg'
                                            : character.name === "Darth Vader" ? 'https://starwars-visualguide.com/assets/img/characters/4.jpg'
                                                : character.name === "Leia Organa" ? 'https://starwars-visualguide.com/assets/img/characters/5.jpg'
                                                    : character.name === "Owen Lars" ? 'https://starwars-visualguide.com/assets/img/characters/6.jpg'
                                                        : character.name === "Beru Whitesun lars" ? 'https://starwars-visualguide.com/assets/img/characters/7.jpg'
                                                            : character.name === "R5-D4" ? 'https://starwars-visualguide.com/assets/img/characters/8.jpg'
                                                                : character.name === "Biggs Darklighter" ? 'https://starwars-visualguide.com/assets/img/characters/9.jpg'
                                                                    : character.name === "Obi-Wan Kenobi" ? 'https://starwars-visualguide.com/assets/img/characters/10.jpg'
                                                                        : ''
                            } />
                            
                        </div>
                    )))}
            </div>
        </>
    )
}