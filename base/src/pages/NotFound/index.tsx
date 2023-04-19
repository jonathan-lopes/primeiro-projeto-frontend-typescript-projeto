import Header from "../../components/Header";
import "./styles.css";

export default function NotFound() {
  return (
    <div className="container">
      <Header showBack />

      <div className="notfound">
        <h1>Página não encontrada :(</h1>
      </div>
    </div>
  );
}
