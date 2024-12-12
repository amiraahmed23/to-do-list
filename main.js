const add = document.getElementById('add-btn');
const input = document.getElementById('task-input');
const todoList = document.getElementById('todo');
const clear = document.getElementById('clear');

add.addEventListener('click', ()=>{
    let task = input.value.trim();
    if(task){
        let list = document.createElement('li');
        list.className = 'list';
        list.innerHTML = `
                    <label>
                        <input type="checkbox"> ${task}
                    </label>`;
                todoList.appendChild(list); 
                input.value = '';      

    }
});
clear.addEventListener('click', () => {
    todoList.innerHTML = '';
});
