import React from 'react'
import { connect } from 'react-redux'

const Suplentes = ({suplentes,quitarSuplente}) => (
    <section>
        <h2> Suplentes</h2>
            <div className="cancha">
                {
                    suplentes.map(item =>(
                        <article className="titular" key={item.id}>
                            <div>
                                <img src={item.foto} alt={item.nombre}/>
                                <button onClick={()=> quitarSuplente(item)}>Quitar</button>
                            </div>
                            <p>{item.nombre}</p>
                        </article>
                    ))
               }              
            </div>
        
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes 
  })
  
  const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador){
        dispatch({
            type:"QUITAR_SUPLENTE",
            jugador
        })
    }
  })

//connect recibe 2 parametro:
//primero: map de los estado
//segundo: map de las acciones
export default connect(mapStateToProps,mapDispatchToProps)(Suplentes)