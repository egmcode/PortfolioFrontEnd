import React, {Component} from 'react';
import Relevantexps from './Relevantexps';
import Otherexps from './Otherexps';
import '../styles/Experiences.css';

class Experiences extends Component {
    render()
    {
        return(
            <div id="experience">
                <Relevantexps />
                <Otherexps />
            </div>
        )
    }
}

export default Experiences;