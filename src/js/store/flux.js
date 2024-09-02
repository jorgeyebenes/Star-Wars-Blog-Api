
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [],
			singleCharacter: [],
			Vehicles:[],
			singleVehicle:[],
			Planets:[],
			singlePlanet:[],
			favourites: JSON.parse(localStorage.getItem("favourites")) || []
		},
		actions: {
			addFavourite: (favourites) => {
				const store = getStore();
				const newFavourite = [...store.favourites, favourites];
				setStore({ favourites: newFavourite });
				localStorage.setItem("favourites", JSON.stringify(newFavourite));
			},
			deleteFavourite: (indexDelete) => {
				const store = getStore();
				const newFavourite = store.favourites.filter((_, index) => index !== indexDelete);
                setStore({ favourites: newFavourite });
                localStorage.setItem("favourites", JSON.stringify(newFavourite));
			},

			fetchCharacter: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/characters', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Data received from API:", data); 
						setStore({ character: data.results}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchOneCharacter: async (id) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/character/${id}`, {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Data of a sigle character:", data); 
						setStore({ singleCharacter: data}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchVehicle: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/vehicles', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Data received from API:", data); 
						setStore({ vehicle: data.results}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchOneVehicle: async (id) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Data from vehicles:", data); 
						setStore({ singleVehicle: data}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchPlanet: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/planets', {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Data received from API:", data); 
						setStore({ planets: data.results}); 
				} catch (error) {
					console.log(error);
				}
			},
			fetchOnePlanet: async (id) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/planets/${id}`, {
						method: "GET"
					});
					const data = await resp.json();
					console.log("Data from planets:", data); 
						setStore({ singlePlanet: data}); 
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;