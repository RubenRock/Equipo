import React from 'react'
import { connect } from 'react-redux'

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map(item =>(
                        <article className="titular" key={item.id}>
                            <div>
                                <img src={item.foto} alt={item.nombre}/>
                                <button onClick={() => quitarTitular(item)}>Quitar</button>
                            </div>
                            <p>{item.nombre}</p>
                        </article>
                    ))
                }
                
            </div>
        
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares 
  })
  
  const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador){
        dispatch({
            type:"QUITAR_TITULAR",
            jugador
        })
    }
  })

//connect recibe 2 parametro:
//primero: map de los estado
//segundo: map de las acciones
export default connect(mapStateToProps,mapDispatchToProps)(Titulares)