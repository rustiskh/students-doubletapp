import headerLogoSVG from "../../../img/icons/general/main-logo.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header__content">
				<Link to="/" className="header__logo">
					<img src={headerLogoSVG} alt="DT." />
				</Link>
				<div className="header__title">
					<div className="header__title-main">
						<p>
							STUDENTS
							<span>
								{""} by <Link to="https://github.com/rustiskh">rustiskh</Link>
							</span>
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
