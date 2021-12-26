let displayxyz = document.getElementById("display")

// let buttonsxyz = Array.from(document.getElementsByClassName("btn"))
// //btnxyz

// function clickingxyz(btnxyz){
//     btnxyz.addEventListener("click",(xyz)=>{
//         switch(xyz.target.innerText){
//             case 'C':
//                 displayxyz.innerText = ""
//                 break
//             case '←' :
//                 displayxyz.innerText = displayxyz.innerText.slice(0,-1)
//                 break
//             case '=':
//                 try{
//                     displayxyz.innerText = eval(displayxyz.innerText)
//                 }
//                     catch{
//                         displayxyz.innerText = 'ERROR'
//                     }
                
                
//                 break
//             default:
//                 displayxyz.innerText = display.innerText + xyz.target.innerText
//                 break
//         }
//     })
// }

// buttonsxyz.map(abcdxyz=>clickingxyz(abcdxyz))


function clickingxyz(clickedxyz){
    displayxyz.innerText = displayxyz.innerText+clickedxyz
}
function evalxyz(){
    try{
        displayxyz.innerText = eval(displayxyz.innerText)
    }catch(err){
        displayxyz.innerText = 'Error'
    }
    
}
function clearxyz(){
    displayxyz.innerText = ""
}
function backxyz(){
    displayxyz.innerText = displayxyz.innerText.slice(0,-1)
}