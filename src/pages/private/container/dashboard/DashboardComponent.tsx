import React from "react";
import CircleChartComponent from "pages/private/components/CircleChartComponent";
// Styles
import "./DashboardComponent.scss";

const DashboardComponent: React.FC<any> = () => {
	return (
		<>
			<div className="header-container">
				<h1 className="container-title">Tela Inicial</h1>
				{/* <ButtonComponent value="texto" action={() => 'text'} /> */}
				<CircleChartComponent />
			</div>
		</>
	);
};

export default DashboardComponent;
