import { Link } from "react-router-dom";
import '../css/formStyles.css';
import { FaKey, FaUser } from "react-icons/fa";

export default function Login(){
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return(
        <main>
            <div className="contenedor-login">
                <h2>Ingresá a tu cuenta</h2>
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
                            <FaKey className="labelIcon"/>
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <input type="password" name="password" required placeholder="Ingresá tu contraseña" />
                        <Link className="link">Olvidé mi contraseña</Link>
                    </div>
                    <div className="boton-container">
                        <button id="botonIngresar" type="submit" className="boton">Ingresar</button>
                        <Link id="botonRegistrarme" to="../register" className="boton"> Registrarme </Link>
                    </div>

                                                 
                </form>
            </div>
        </main>
    );
}