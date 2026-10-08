import { data } from './directory-data.js'

// put object references in this array so that we can go back in the path
let path = []

// path display element
const path_element = document.getElementById("path");

// display path function
const show_path = () => {
    path_element.innerHTML = ""
    path.forEach(folder => {
        path_element.append(folder.name + " > ")
    });
}

// wait function
// might use this to make the render look like it takes time
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


const render = async (folder) => {
    // empty the list
    directory_element.replaceChildren();

    // if the folder is not the root, add an element to go back
    if (folder.name !== "root") {
        // make the element
        let element = document.createElement("ul")
        let child_element = document.createElement("button");

        // populate the element
        child_element.innerHTML = "Back";
        child_element.addEventListener("click", () => {
            path.pop();

            // render
            render(path[path.length -1])
        });


        // add element to the HTML
        element.appendChild(child_element);
        directory_element.appendChild(element)
    }

    // show the current path
    show_path();

    // get every child and add it
    for (let child of folder.children) {
        directory_element.appendChild(create_element(child))
    }
}

// create an ul HTML element and return it with the proper controls inside
const create_element = (child) => {
    let element = document.createElement("ul")
    let child_element;

    // create a button element with the proper info if its a folder
    if (child.type === "folder"){
        // create the button
        child_element = document.createElement("button");

        // add the function to the button
        child_element.addEventListener("click", () => {
            // add the element to the path
            path.push(child); 

            // render
            render(child)
        });

        // add the text to the button
        child_element.innerHTML = child.name + " (" + child.children.length +")";
    }
    // create a link element with the href if not a folder
    else if (child.type === "file") {
        child_element = document.createElement("a");
        child_element.innerHTML = child.name;

        // add the href
        child_element.setAttribute("href", child.location);
    }
    
    // return the element
    element.appendChild(child_element);
    return element;
}

// get the ol tag we want to put the directory in
let directory_element = document.getElementById("directory")

// the first render (root)
render(data);
path.push(data);
show_path();