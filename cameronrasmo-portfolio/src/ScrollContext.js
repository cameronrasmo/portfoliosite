import React from "react";
const ScrollContext = React.createContext();

function ScrollContextProvider(props) {
    function scrollTo(e) {
        const { id } = e.target;
        id === "projects"
            ? document.getElementById("project-container-1").scrollIntoView()
            : document.getElementById(`${id}-container`).scrollIntoView();
    }
    return (
        <ScrollContext.Provider value={{ scrollFunc: scrollTo }}>
            {props.children}
        </ScrollContext.Provider>
    );
}

export { ScrollContextProvider, ScrollContext };
