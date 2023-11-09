const btn = document.getElementById('btn');
const form = document.getElementById('form');
const email = document.getElementById('email');
const Age = document.getElementById('number');

btn.addEventListener('click', function () {

    if (form.value && email.value && Age.value) {
        const data = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

        const todo = {};
        todo.id = Date.now();
        todo.text = form.value;
        todo.status = 'active';
        data.push(todo);

        form.value = '';
        Age.value = '';
        email.value = '';

        localStorage.setItem('todo', JSON.stringify(data));
    } else{
        alert("Bo'sh maydon bo'lmasligi zarur");
        let li = document.createElement("li");
    }

    const ul = document.getElementById('ul');
    let li = document.createElement('li');
    li.setAttribute('id', 'todo_' + todo.id);
    ul.appendChild(li);
})
