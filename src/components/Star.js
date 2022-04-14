import React from "react";

const Star = (props) => {
	const {active} = props;
	return (
		<span>
			{active
				? '💛'
				: '🖤'
			}
		</span>
	);
}

export default Star;