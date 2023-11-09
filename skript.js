const btn = document.getElementById('btn');
const form = document.getElementById('form');
const email = document.getElementById('email');
btn.addEventListener('click', function () {
    // const menu = document.getElementById('menu'); // Agar foydalanilmasa, uni o'chirib tashlang

    const data = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
    
    const todo = {};
    todo.id = Date.now();
    todo.text = form.value; // form.value ni email.value ga o'zgartiring
    todo.status = 'active';
    data.push(todo);

    localStorage.setItem('todo', JSON.stringify(data))
})
