// function deleteBlock() {
//     if(!!document.getElementsByClassName(
//         "border py-2 graph-before-activity-overview"
//     )) {
//         document.getElementsByClassName(
//             "border py-2 graph-before-activity-overview"
//         )[0].remove()
//     }
// }

// deleteBlock();
// function paint(){
//     if(!!document.getElementsByClassName(
//                 "ContributionCalendar-day"
//             )) {
//                 document.getElementsByTagName(
//                     "data-ix"
//                 )[0].remove()
//             }
    
// }
let elements = document.getElementsByClassName("ContributionCalendar-day");
let colors = ['216e39', '30a14e', '40c463', '9be9a8'];
let color,
    opacity;

function changeColor(){
        for(let i = 0; i < elements.length; i++){
            function getRandomColor(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            color = getRandomColor(0,3);
        
            elements[i].style.backgroundColor = `#${colors[color]}`;
        }
    }
changeColor();