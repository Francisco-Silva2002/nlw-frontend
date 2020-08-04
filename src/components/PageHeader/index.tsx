import React from "react";
import "./styles.css";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string; // se for um parametro opcional, colocar ?:
}

/* usando typescript definindo o componente PageHeader como um Componente Funcional
   e definimos as propriedades que esse componente recebe
*/
const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  title,
  children,
}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
};

export default PageHeader;