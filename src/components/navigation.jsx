import * as Text from '.././strings.json'
import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        const heading= Text.home.heading;
        const home=Text.nav.home;
        const about=Text.nav.about;
        const partners=Text.nav.partners;
        const contact=Text.nav.contact;
        const getInvolved=Text.nav.involved;

        return (<div className="navContainer">
            <div className="headingInfo">
                <img></img>
            <h1>{heading}</h1>
            </div>
            <nav>
                <ul className="navItems">
                    <li>{home}</li>
                    <li>{about}</li>
                    <li>{getInvolved}</li>
                    <li>{partners}</li>
                    <li>{contact}</li>
                </ul>
            </nav>
        </div>);
    }
}

export default Navigation; 