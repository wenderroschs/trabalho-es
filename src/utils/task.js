module.exports = {
    add: (title, desc, time, priority) => {
        const firebase = require('./../services/firebase');
        const models = require('./../models/task');
        const newTask = new models.Task (title, desc, time, priority)
        
        try {
            firebase.db.ref('/tasks').push().set(newTask);
        } catch (err) {
            console.log("erro:" + err);
        }
    },

    remove: (id) => {
        const firebase = require('./../services/firebase');

        firebase.db.ref('/tasks').child(id).remove();
    },

    render: () => {
        const firebase = require('./../services/firebase');

        const ref = firebase.db.ref('/tasks');

        const content = document.querySelector('.content');

        let tasks = document.querySelector('.tasks');

        if (tasks === null) {
            tasks = document.createElement('div');
            tasks.className = 'tasks';
        } else {
            tasks.remove();
            tasks = document.createElement('div');
            tasks.className = 'tasks';
        }


        ref.on('value', snapshot => {
            for (const key of Object.keys(snapshot.val())) {
                const value = snapshot.val()[key]
                const priority =  value.priority;
                const title = value.title;
                const desc = value.description;
                const time = value.time;

                tasks.innerHTML += `
                    <div class="alert alert-${priority}" role="alert">
                        <div class="d-flex justify-content-between">
                            <h6>${title}</h6>
                            <h6>${time}</h6>
                        </div>
                        <hr>
                        <div>
                            <p>${desc}</p>
                        </div>
                        <button class="btn btn-danger btn-delete" id="${key}">Excluir</btn>
                    </div>
                `
            }
        });

        content.appendChild(tasks);
    }
}