import React, {Component} from 'react';
import Relevantexp from './Relevantexp';
import Exptitle from './Exptitle';

class Relevantexps extends Component 
{
    render()
    {
        return(
            <>
                <Exptitle title = "Relevant Experience" />
                <Relevantexp
                    title = "Document Composition"
                    body = "I work on a team that renders, prints and mails documents.  Since being on the team, I have been given so many amazing opportunities to learn and grow as a developer. I was given the chance to design, develop and deploy my teams RESTful web service to facilitate document rendering. The CICD pipeline included Azure Git Repos, Jenkins, Docker, Artifactory, and Kunernetes.  In addition to the REST API, I designed, developed and deployed a RESTful Web Application (MVC Pattern) that created a user-friendly experience for onboarding and migrating API Clients.  This application was also built and deployed using same pipeline. As well as building new applications, I currently give real-time production and change support to existing applications.  I strive to be customer minded and work hard to ensure the best possible product."
                    current = "Currently Held Position"
                    src = "bank.jpg"
                    alt = "document rendering"
                />
                <Relevantexp
                    title = "EGMCodes Site"
                    body = "I greatly enjoyed building this website from the ground up.  The stack consists of ReactJS on the frontend and two backend services: a REST API using Spring Boot that serves information about me and a Node & Express REST API that serves the auth piece.  *The use of different technologies between the two backend services, and having an auth service altogether, was more so for demonstration purposes*.  Both services are using a MySQL database and all parts of the site were deployed with AWS.  Please click the GitHub button above to see the code for the website."
                    src = "site.png"
                    alt = "my site"
                />
                <Relevantexp
                    title = "Color Wheel"
                    body = "I worked as an intern on a project using the MEAN stack.  I mostly worked on the business logic in the backend that facilitated a color wheel component, but was exposed to all parts of the stack. Since then, my personal interests have led me to learn the MERN stack as well."
                    current = ""
                    src = "color.jpg"
                    alt = "color wheel"
                />
                <Relevantexp
                    title = "Scavengar Hunt"
                    body = "I worked on a small agile dev team as an undergrad. We built a scavengar hunt website using the django stack. Since then, I have regularly refreshed my knowledge of the django stack and have also learned the Flask Web Framework (which I personally like a little better)."
                    current = ""
                    src = "map.jpg"
                    alt = "scavengar hunt"
                />
            </>
        )
    }
}

export default Relevantexps;
