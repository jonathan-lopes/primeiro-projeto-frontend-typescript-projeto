import logo from "../../assets/logo.svg";
import "./styles.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="container container-sign-in">
      <div className="sign-in">
        <img src={logo} alt="Logo Cubos Academy" />
        <form>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />

          <span>
            Não tem cadastro? <Link to="/sign-up">Clique aqui!</Link>
          </span>

          <button className="btn-pink">Login</button>
        </form>
      </div>
    </div>
  );
}
