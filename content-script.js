
function changeColor(){
        let colors = ['216e39', '30a14e', '40c463', '9be9a8'];
        let color,
        opacity;
        let elements = document.getElementsByClassName("ContributionCalendar-day");
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