import React from "react";
import Sidebar from "./Components/Sidebar";
import WelcomeSection from "./Components/WelcomeSection";
import Contact from "./Components/Contact";
import ProjectSection from "./Components/ProjectSection";
import projectFile from "./projects.json";
import About from "./Components/About";
import { ScrollContext } from "./ScrollContext";

function App() {
    const scroll = React.useContext(ScrollContext);
    const displayed = projectFile.projects.map((item) => {
        return (
            <ProjectSection
                name={item.name}
                madewith={item.madeWith}
                description={item.description}
                imgUrl={item.imgUrl}
                bgColor={item.bgColor}
                githubUrl={item.githubUrl}
                siteUrl={item.siteUrl}
                next={item.next}
                id={item.id}
            />
        );
    });
    return (
        <div id='scroll-container'>
            <Sidebar scroll={scroll.scrollFunc} />
            <WelcomeSection />
            {displayed}
            <About />
            <Contact />
        </div>
    );
}

export default App;
