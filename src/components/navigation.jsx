import * as Text from ".././strings.json";
import React, { Component } from "react";
import ".././scss/navigation.scss";
import Logo from ".././media/dishLogoPlaceholder.svg";
import { Link } from "react-router-dom";
class Navigation extends Component {
	render() {
		const heading = Text.home.heading;
		const subHeading = Text.home.subheading;
		const home = Text.nav.home;
		const about = Text.nav.about;
		const partners = Text.nav.partners;
		const contact = Text.nav.contact;
		const getInvolved = Text.nav.involved;

		return (
			<div className="Container">
				<div className="headingContainer">
					<img className="logo" alt="Logo" src={Logo}></img>
					<div className="headingInfo">
						<h1>{heading}</h1>
						<h2>{subHeading}</h2>
					</div>
				</div>
				<div className="navContainer">
					<nav>
						<Link className="home" to="/home">
							{home}
						</Link>
						<Link className="about" to="/about">
							{about}
						</Link>
						<Link className="volunteer" to="/volunteer">
							{getInvolved}
						</Link>
						<Link className="partners" to="/partners">
							{partners}
						</Link>
						<Link className="contact" to="contact">
							{contact}
						</Link>
					</nav>
				</div>
			</div>
		);
	}
}

export default Navigation;
