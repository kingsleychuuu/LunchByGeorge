import * as Text from ".././strings.json";
import React, { Component } from "react";
import ".././scss/navigation.scss";
import Logo from ".././media/dishLogoPlaceholder.svg";
import { NavLink } from "react-router-dom";
import Menu  from ".././media/menu-icon.svg";

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: false };
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleToggle() {
		console.log(this.state);
		const { isToggleOn } = this.state;
		this.setState({ isToggleOn: !isToggleOn });
	}
	render() {
		const heading = Text.home.heading;
		const subHeading = Text.home.subheading;
		const home = Text.nav.home;
		const about = Text.nav.about;
		const partners = Text.nav.partners;
		const contact = Text.nav.contact;
		const getInvolved = Text.nav.involved;

		return (
			<div className="main-header">
				<div className="header-logo">
					<img className="logo" alt="Logo" src={Logo}></img>
				</div>	
				<div className="header-title"><h1>{heading}</h1></div>
				
				
				<h2 className="subTitle">{subHeading}</h2>
			<nav className="navBar">
			
					<span className="navbar-toggle" onClick={this.handleToggle}>
					<i className="menu">
						<img className="menu-icon" alt="menu" src={Menu}></img>
					</i>
				
					</span>
				
					<ul className={`navbar-menu ${this.state.isToggleOn ? "active":""}`}>
						<li>
						<NavLink className="home" activeClassName="link-item-active home" to="/home">
							{home}
						</NavLink>
						</li>
						<li>
						<NavLink className="about" activeClassName="link-item-active about" to="/about">
							{about}
						</NavLink>
						</li>
						<li>
						<NavLink className="volunteer" activeClassName="link-item-active volunteer" to="/volunteer">
							{getInvolved}
						</NavLink>
						</li>
						<li>
						<NavLink className="partners" activeClassName="link-item-active partners" to="/partners">
							{partners}
						</NavLink>
						</li>
						<li>
						<NavLink className="contact" activeClassName="link-item-active contact" to="contact">
							{contact}
						</NavLink>
						</li>
					</ul>
				</nav>	
			</div>
			
		);
	}
}


export default Navigation;
