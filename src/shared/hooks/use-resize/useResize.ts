import React from "react";
import { SCREEN_MOB_SMALL, SCREEN_MOB, SCREEN_TABLET, SCREEN_LAPTOP, SCREEN_PC } from "../../constants/screenSizes";

const useResize = () => {
	const [width, setWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return {
		width,
		isScreenMobSmall: width <= SCREEN_MOB_SMALL,
		isScreenMob: width <= SCREEN_MOB,
		isScreenTablet: width <= SCREEN_TABLET,
		isScreenLaptop: width <= SCREEN_LAPTOP,
		isScreenPc: width <= SCREEN_PC,
	};
};

export default useResize;
