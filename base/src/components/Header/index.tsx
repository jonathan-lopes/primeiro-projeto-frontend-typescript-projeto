import "./styles.css";
import logo from "../../assets/logo.svg";
import arrowBack from "../../assets/arrow-back.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  showBack?: boolean;
};

export default function Header({ showBack }: Props) {
  const navigate = useNavigate();

  return (
    <header>
      {showBack && (
        <img
          className="arrow-back"
          src={arrowBack}
          alt="Arrow back"
          onClick={() => navigate(-1)}
        />
      )}

      <img src={logo} alt="Logo" />
    </header>
  );
}
