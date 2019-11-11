'use strict';

import task from './utils/task';

task.render();

document.querySelector('.btn-save').addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const desc = document.querySelector('#validationTextarea').value;
    const time = document.querySelector('.prazo').value;
    const priority = document.querySelector('#inputGroupSelect01').value;

    task.add(title, desc, time, priority);

    task.render();
});

setTimeout(() => {
    const btnsRemove = document.querySelectorAll('.btn-delete');
    
    for (const btn of btnsRemove) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            task.remove(e.target.id);
            task.render();
        });
    }
}, 4000);

