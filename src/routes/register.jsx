import { Link } from "react-router-dom";
import '../css/formStyles.css';
import { FaKey, FaUser, FaAt } from "react-icons/fa";

export default function Register(){
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return(
        <main>
            <div className="contenedor-login">
                <h2>Registrarse</h2>
                <form id="form-login" method="post" onSubmit={handleSubmit}>
                    <div className="grupo">
                        <div className="labelIcon-div">
                            <FaUser className="labelIcon"/>
                            <label htmlFor="usuario"> Nombre de usuario </label>
                        </div>
                        <input type="text" name="usuario" required placeholder="Ingresá tu usuario" />
                    </div>

                    <div className="grupo">
                        <div className="labelIcon-div">
                            <FaAt className="labelIcon"/>
                            <label htmlFor="email"> Correo electrónico </label>
                        </div>
                        <input type="email" name="email" required placeholder="Ingresá tu correo" />
                    </div>

                    <div className="grupo">
                        <div className="labelIcon-div">
                            <FaKey className="labelIcon"/>
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <input type="password" name="password" required placeholder="Ingresá tu contraseña" />                        
                    </div>
                    <div className="boton-container">
                        <button id="botonIngresar" type="submit" className="boton">Registrarme</button>
                        {/* <Link id="botonRegistrarme" to="../register" className="boton"> Registrarme </Link> */}
                    </div>

                                                 
                </form>
            </div>
        </main>
    );
}