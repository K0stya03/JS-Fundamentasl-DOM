// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress
// 

function extractFormData() {
    const name = document.querySelector('input[name="fio"]').value;
    const phoneNumber = document.querySelector('input[name="phone"]').value;
    const dateOfBirth = document.querySelector('input[name="birthday"]').value;
    const emailAddress = document.querySelector('input[name="email"]').value;

    const outputElement = document.querySelector('.out');
            outputElement.innerHTML = `
                <p>Name: ${name}</p>
                <p>Phone Number: ${phoneNumber}</p>
                <p>Date of Birth: ${dateOfBirth}</p>
                <p>Email Address: ${emailAddress}</p>
            `;


}
extractFormData()



module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};
