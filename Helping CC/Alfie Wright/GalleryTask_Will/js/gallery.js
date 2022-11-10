const container = document.querySelector(".container")
const column = document.getElementsByClassName("column")
const col1 = document.getElementById("1")
const col2 = document.getElementById("2")
const col3 = document.getElementById("3")
const col4 = document.getElementById("4")
const url = "../images/"
const imagetype = ".jpg"
let colNum = 1

////////////////////////////////////////////


function GetImage(whichImage, whichClassName){
    let img = document.createElement ("img")
    img.id = "myImage"
    img.className = whichClassName
    img.src = url + whichImage + imagetype
    imgWidth = img.width
    imgHeight = img.height
    return img
}

function GetMultiImage(noOfImages){
    let multiDiv = document.createElement("div")
    multiDiv.id = "multiDiv"
    multiDiv.className = "multiDiv"
    for(let i = 0; i < noOfImages; i++){
        multiDiv.appendChild(GetImage(Math.floor(Math.random() * 17),"imgClass"))
    }
    return multiDiv

}

function AppendToColumn(img){
    let randomColumn = Math.floor(Math.random() * 4)
    switch (randomColumn){

        case 0 : 
                col1.appendChild(img);
                break;
        case 1 :  
                col2.appendChild(img);
                break;
        case 2 : 
                col3.appendChild(img);
                break;
        case 3 :  
                col4.appendChild(img);
                break;
    }
}

function LoadWebpage(){
    for(let i = 1; i < 18; i++){
        AppendToColumn(GetImage(i), "cvbc");
        AppendToColumn(GetMultiImage(4))
    }
}

LoadWebpage()