// consts used when passing the changeMainHTML arguments by value
const homeContent = "homeContent.html";
const x106 = "x106.html";
const x108 = "x108.html";
const x201 = "x201.html";
const x202 = "x202.html";
const x301 = "x301.html";
const x304 = "x304.html";
const f3process = "f3Process.html";
const coders = "coders.html";
const spiralveyor = "spiralveyor.html";
const glueApplicator = "glueApplicator.html";
const palletisers = "palletisers.html";
const islandsAVLS = "islandsAVLS.html";
const labellers = "labellers.html";

// Changing HTML main function
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("mainHTML");
        // console.log(elmnt.getAttribute("mainHTML"));
        if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /*remove the attribute, and call this function once more:*/
                elmnt.removeAttribute("mainHTML");
            includeHTML();
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
        }   
    }
    rootPath();
};

function rootPath() {
    // find all html elements with the class "documentLink"
    var documentLinks = document.getElementsByClassName("documentLink");
        // Loop through elements with event listener
        for (var d = 0; d < documentLinks.length; d++) {

            documentLinks[d].addEventListener("click", function() {
                // get data-path (document path from parent source data)
                var linkParent = document.getElementById(this.id).parentElement,
                    ulRoot = linkParent.parentElement,
                    path = ulRoot.getAttribute('data-path');
            
                launchDoc(path, this.id);
                });
            };
        };




//------------------------------------------------------------------------------------------------------

// Document Launcher
function launchDoc(targetFilePath, fileName) {

    var filePath = targetFilePath.concat(fileName); 
    document.getElementById(fileName).setAttribute("href", filePath);
    return;
};

//------------------------------------------------------------------------------------------------------

// Changing tab pane content
function changeMainHTML(targetHTML) {
    // set the attribute of mainHTML to the targetHTML from the link in the sidebar
    document.getElementById("mainContent").setAttribute("mainHTML", targetHTML);
    //rootPath(); //stop error on 1st page load
    includeHTML();
    return;
};

//------------------------------------------------------------------------------------------------------

// Shading the selected sidebar element 
var linkContainer = document.getElementById("mySidebar");
var navLinks = linkContainer.getElementsByClassName("nav-link");

for (var i = 0; i < navLinks.length; i++) {

    navLinks[i].addEventListener("click", function() {

        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        return;
  });
};

//------------------------------------------------------------------------------------------------------

    
