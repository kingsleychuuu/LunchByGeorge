import React, { Component } from 'react';
import * as Text from ".././strings.json"
import "../scss/footer.scss";
class Footer extends Component {
    
    render() {
        const telephone=Text.footer.telephone;
        const building=Text.footer.building;
        const street=Text.footer.street;
        const address=Text.footer.address;

    return (<footer><ul>
                        <li>{telephone}</li>
                        <li>{building}</li>
                        <li>{street}</li>
                        <li>{address}</li>
                    </ul></footer>);
    }
}

export default Footer;