
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()
// Щоб перевірити правильність виконання введіть команду: npx jest test3.jest.js


function applyStyles() {
    const mainElement = document.createElement('main');
    mainElement.className = 'mainClass check item';

    const divElement = document.createElement('div');
    divElement.id = 'myDiv';

    const pElement = document.createElement('p');
    pElement.textContent = 'First paragraph';

    divElement.appendChild(pElement);

    mainElement.appendChild(divElement);

    const existingElement = document.querySelector('.create_elements');
    
    existingElement.appendChild(mainElement);
}
applyStyles();




module.exports = applyStyles;
