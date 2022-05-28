import React, {Component} from 'react';
import '../styles/About.css';

class About extends Component {
    render()
    {
        return(
            <div className="about-container" id="about">
                <div className="about-img-container">
                    <img id="profile-img" src="profile.jpg" alt='profile'/>
                </div>
                <div className="about-txt-container">
                    <h3>About Me</h3>
                    <p>My name is Elizabeth Murphy, and I'm a Software Developer. 
                        I went to school at UW-Milwaukee majoring in Computer Science, 
                        Applied Mathematics, and Actuarial Science. Since the beginning, 
                        my focus has been on Object Oriented Programming. I studied 
                        Java for three years and Python for one. After graduation, 
                        I got a job with US Bank as a Software Developer. While I 
                        have worked on all parts of the stack, I prefer backend 
                        development most.  I am someone that gets excited when presented 
                        with challenges that provide new learning opportunities.  In 
                        addition to software development, my love for dance is still 
                        very much a part of my life.  I teach at my local dance studio 
                        two nights a week.  When I'm not at work, I'm often spending time 
                        with family.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;