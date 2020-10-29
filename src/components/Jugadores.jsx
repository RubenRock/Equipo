import React from 'react'
import {connect } from 'react-redux'

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) =>(
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
           {jugadores.map(item =>(
                <article className="jugador" key={item.id}>
                    <img src={item.foto} alt={item.nombre}/>  
                    <h3>{item.nombre}</h3>
                    <div>
                        <button onClick={() => agregarTitular(item)}>Titular</button>
                        <button onClick={() => agregarSuplente(item)}>Suplente</button>        
                    </div>
                </article>
                ))
                
            }            
        </div>
    </section>

)

const mapStateToProps = state => ({
  jugadores: state.jugadores 
})

const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador            
        })
    },

    agregarSuplente(jugador){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador            
        })
    }
}) 
//connect recibe 2 parametro:
//primero: map de los estado
//segundo: map de las acciones
export default connect(mapStateToProps,mapDispatchToProps)(Jugadores)