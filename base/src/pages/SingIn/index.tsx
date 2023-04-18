import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleAddToken, handleGetToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = handleGetToken();

    if (token) {
      navigate("/main");
      return;
    }
  }, [handleGetToken, navigate]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      if (!email || !password) {
        throw new Error("Email and password is required");
      }

      const response = await api.post("/login", {
        email,
        password,
      });

      const { accessToken } = response.data;

      handleAddToken(accessToken);

      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container container-sign-in">
      <div className="sign-in">
        <img src={logo} alt="Logo Cubos Academy" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <span>
            Não tem cadastro? <Link to="/sign-up">Clique aqui!</Link>
          </span>

          <button className="btn-pink">Login</button>
        </form>
      </div>
    </div>
  );
}
