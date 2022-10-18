import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "shared/components/button/ButtonComponent";

// Styles
import "./DashboardComponent.scss";

const DashboardComponent: React.FC<any> = () => {
  return (
    <>
      <div className="header-container">
        <h1 className="container-title">Tela Inicial</h1>
        {/* <ButtonComponent value="texto" action={() => 'text'} /> */}
      </div>
    </>
  );
};

export default DashboardComponent;
