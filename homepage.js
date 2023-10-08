const array = [
    {
        text: "Copy Right is held by fake student",
        href: ""
    },
    {
        text: "Play TTT",
        href: "ttt.html"
    },
    
    {
        text: "Sumbit Code",
        href: "submitCode.html"
    },
    {
        text: "Contact",
        href: "contact.html"
    },
    {
        text: "Our mission",
        href: "mission.html"
    },
]

let footer = document.querySelector("footer");
let num=array.length
for(let link of array){
    let hlink= document.createElement("h3")
    let tlink = document.createElement("a");
    let alink= document.createElement("aside")
    let variable="footernav "+"footer"+num 
    console.log(variable)
    alink.setAttribute("Class",variable)
    tlink.innerText = link.text
    tlink.href = link.href
    alink.appendChild(tlink)
    hlink.appendChild(alink)
    footer.prepend(hlink)
    num--
}