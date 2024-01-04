// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npm jest task2.test.js


function applyStyles() {
    let titleElement = document.getElementById("title");
    titleElement.style.fontWeight = "bold";
    titleElement.style.backgroundColor = "green";

    let myDiv = document.getElementById("myDiv").children;
    myDiv[0].style.fontWeight = "bold";
    myDiv[1].style.color = "red";
    myDiv[2].style.textDecoration = "underline";
    myDiv[3].style.fontStyle = "italic";

    let myList = document.getElementById("myList");
      myList.style.display = "flex";
      myList.style.listStyleType = "none";
      myList.style.padding = "0";

    let spanElements = document.getElementsByTagName('span');
    if (spanElements.length > 0) {
        for (var i = 0; i < spanElements.length; i++) {
          spanElements[i].style.display = 'none';
        }
    }
 }
 
 
 applyStyles();

 module.exports = applyStyles;
