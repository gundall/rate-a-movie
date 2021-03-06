import React from "react";
import { LogoHeader } from "../../themes/bn/LogoStyled";

const Logo = () => {
	return (
		<LogoHeader className="logo">
			<h1>Rate-a-movie</h1>
            <span>by Gonzalo López</span>
		</LogoHeader>
	);
};

export default Logo;