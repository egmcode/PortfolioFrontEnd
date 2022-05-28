import React, {Component} from 'react';
import '../styles/Otherexps.css';
import Exptitle from './Exptitle';
import Otherexp from './Otherexp';

class Otherexps extends Component 
{
    render()
    {
        return(
            <>
                <div className="othexp-padding"></div>
                <Exptitle title="Other Experience" />
                <Otherexp
                    title = "Dance Teacher"
                    body = "I have had the joy of teaching dance for the past four years.  I teach students aged 3 to 18; my class sizes range from 5 to 16 kids.  It has required me to have good communication, strong leadership, strong interpersonal skills, creativity, and a positive attitude in all situations.  I am grateful for the opportunity to share my passion with so many students."
                    current = "Currently Held Position"
                    src = "dance.jpg"
                    alt = "dance teacher"
                />
                <Otherexp
                    title = "Math Tutor"
                    body = "For three years I tutored the calculus series helping students understand abstract concepts to succeed on their own. The ability to teach others complex concepts has greatly helped me in my career."
                    src = "math.jpg"
                    alt = "math tutor"
                />
            </>
        )
    }
}

export default Otherexps;
