import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



export const CharacterInfo = () => {
    const { store, actions } = useContext(Context);
    const { id, character_name } = useParams();

    useEffect(() => {
        actions.fetchOneCharacter(id)
    }, [id])

    const character = store.singleCharacter.result ? store.singleCharacter.result.properties : null;

    if (!character) {
        return <div className="text-light text-center fs-2">Uploading character data...</div>;
    }

    return (
        <div>
            <h1 className="text-warning text-center display-1">{character.name}</h1>
            <div className="d-flex gap-2 flex-wrap container-fluid tarjeta-info p-5 w-75 rounded">
                <div>
                    <img className="rounded" src={
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
                <div className="fs-4 ms-5">
                    <p><strong>Height:</strong> {character.height} cm</p>
                    <p><strong>Weight:</strong> {character.mass}</p>
                    <p><strong>Hair color:</strong> {character.hair_color}</p>
                    <p><strong>Skin color:</strong> {character.skin_color}</p>
                    <p><strong>Eye color:</strong> {character.eye_color}</p>
                    <p><strong>Birth year:</strong> {character.birth_year}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Description:</strong> {store.singleCharacter.result.description}</p>
                    <div className="d-flex gap-4 align-items-start mt-5">
                        <Link to="/" className="btn btn-warning fw-bold">Back to Home</Link>
                        <button onClick={store.favourites?.includes(character.name) ? null : () => actions.addFavourite(character.name)} className="btn btn-warning">{store.favourites?.includes(character.name)
                            ? <i className="fa-solid fa-heart"></i>
                            : <i className="fa-regular fa-heart"></i>}</button>
                    </div>

                </div>
            </div>
        </div>
    );
}