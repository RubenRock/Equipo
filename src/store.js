import {createStore} from 'redux'

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Juan Carlitos",
        foto: "https://depor.com/resizer/skxrQl5Z-Mr5DqTkLngV9dfljq8=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4MNCEVYYHFBDPPKCYDXWZOZH4A.jpg"
    },
    {
        id: 2,
        nombre: "Beto Quiroga",
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 3,
        nombre: "Alejo Garcia",
        foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    if(action.type === "AGREGAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(item => item.id !== action.jugador.id )
        }
    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(item => item.id !== action.jugador.id )
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return{
            ...state,            
            titulares: state.titulares.filter(item => item.id !== action.jugador.id ),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,            
            suplentes: state.suplentes.filter(item => item.id !== action.jugador.id ),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)