    let tasks = {
        "tasks": [
            {
            "id": 0,
            "title": "Créer un repository sur github",
            "completed": false,
            "date": "aujourd'hui",
            "note": "Note",
            "steps": [
                {
                "id": 0,
                "title": "Aller sur github.com",
                "completed": false
                },
                {
                "id": 1,
                "title": "Créer le repository",
                "completed": false
                },
            ],
        },
        {
            "id": 1,
            "title": "Créer un repository sur github",
            "completed": false,
            "date": "demain",
            "note": "Note",
            "steps": [
                {
                "id": 0,
                "title": "Aller sur github.com",
                "completed": false
                },
                {
                "id": 1,
                "title": "Créer le repository",
                "completed": false
                },
            ],
        },
        {
            "id": 2,
            "title": "Créer un repository sur github",
            "completed": false,
            "date": "dans deux jours",
            "note": "Note",
            "steps": [
                {
                "id": 0,
                "title": "Aller sur github.com",
                "completed": false
                },
                {
                "id": 1,
                "title": "Créer le repository",
                "completed": false
                },
            ],
        }
        ]
    };

    function updateTasks() {
        document.querySelector('#tasks').innerHTML = '';
        for (let i = 0; i < tasks.tasks.length; i++) {
            
            let task = tasks.tasks[i];
            let taskElement = document.createElement('div');
            taskElement.classList.add('task-element');
            taskElement.setAttribute('id', task.id);
            
            let totalSteps = task.steps.length;
            
            let completedSteps = 0;
            for (let j = 0; j < task.steps.length; j++) {
                if (task.steps[j].completed) {
                    completedSteps++;
                }
            }

            taskElement.innerHTML = `
                <div class="task-start">
                    <div class="checkbox-group">
                        <input type="checkbox" name="task" id="task${task.id}">
                        <label for="task${task.id}" class="checkbox-label" data-target="text${task.id}"><img src="assets/img/check.svg"></label>
                    </div>
                    <div class="task-text">
                        <h6 id="text${task.id}">${task.title}</h6>
                        <p>${completedSteps} sur ${totalSteps} ● Echéance: ${task.date} ● ${task.note}</p>
                    </div>
                </div> 
                <div class="task-end">
                    <button class="task-actions">
                        <span class="icon-bg" onclick="delTask('${task.id}');"><img src="assets/img/delete.svg"></span>
                    </button>  
                </div>  
            `;
            document.querySelector('#tasks').appendChild(taskElement);
        }

        let checkboxLabels = document.querySelectorAll('.checkbox-label');
        for (let i = 0; i < checkboxLabels.length; i++) {
            checkboxLabels[i].addEventListener('click', function() {
                let target = this.getAttribute('data-target');
                let targetElement = document.querySelector('#'+target);
                targetElement.classList.toggle('crossed');
            });
        }


        let tasks_btns = document.querySelectorAll('.task-text');
        for (let i = 0; i < tasks_btns.length; i++) {
            tasks_btns[i].addEventListener('click', function() {
                modal = document.querySelector('#modalAfter');
                modal.innerHTML = '';
                
                let id = this.parentElement.parentElement.getAttribute('id');
                
                let task = tasks.tasks[id];
                
                let steps = task.steps;
                stepsString = '';
                for (let i = 0; i < steps.length; i++) {
                    let step = steps[i];
                    if (step.completed) {

                        stepsString += `
                        <button type="date" class="form-control" placeholder="Nouveau mot de passe">
                            <div class="checkbox-group">
                                <input type="checkbox" name="task" id="task${task.id}step${step.id}" checked>
                                <label for="task${task.id}step${step.id}" class="checkbox-label" data-target="text2"><img src="assets/img/check.svg"></label>
                                ${step.title}
                            </div>
                            <span><img src="assets/img/remove.svg"></span>
                        </button>`;

                    }else{

                        stepsString += `
                        <button type="date" class="form-control" placeholder="Nouveau mot de passe">
                            <div class="checkbox-group">
                                <input type="checkbox" name="task" id="task${task.id}step${step.id}">
                                <label for="task${task.id}step${step.id}" class="checkbox-label" data-target="text2"><img src="assets/img/check.svg"></label>
                                ${step.title}
                            </div>
                            <span><img src="assets/img/remove.svg"></span>
                        </button>`;

                    }
                }

                modal.innerHTML = `
    
                    <div class="card">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" placeholder="Nouveau mot de passe" value="${task.title}" id="title-${task.id}">
                        </div>
            
                        <div class="form-group">
                            <label>Etapes</label>
                            ${stepsString}
                            <button type="date" class="form-control" placeholder="Nouveau mot de passe">
                                Nouvelle étapte 
                                <span><img src="assets/img/plus.svg"></span>
                            </button>
                        </div>
            
                        <div class="form-group">
                            <label>Date</label>
                            <input type="date" class="form-control" placeholder="Nouveau mot de passe" value="${task.date}" id="date-${task.id}">
                        </div>
                        
                        <div class="form-group">
                            <label>Note</label>
                            <textarea type="date" class="form-control" placeholder="Nouveau mot de passe" id="note-${task.id}">${task.note}</textarea>
                        </div>
            
                        <div class="btns">
                            <button onclick="editTask('${task.id}');">Enregister</button>
                            <button class="closeModalLeft${task.id}">Annuler</button>
                        </div>
                    </div>`;
                
                modal.classList.add('active');

                let closeModalLeft = document.querySelector('.closeModalLeft'+task.id);
                closeModalLeft.addEventListener('click', function() {
                    modal.classList.remove('active');
                });
                  
            });
        }
    }


    function delTask(id){
        for (let i = 0; i < tasks.tasks.length; i++) {
            if (tasks.tasks[i].id == id) {
                tasks.tasks.splice(i, 1);
            }
        }
        updateTasks();

    }

    function editTask(id){
        let title = document.querySelector('#title-'+id).value;
        let date = document.querySelector('#date-'+id).value;
        let note = document.querySelector('#note-'+id).value;
        for (let i = 0; i < tasks.tasks.length; i++) {
            if (tasks.tasks[i].id == id) {
                tasks.tasks[i].title = title;
                tasks.tasks[i].date = date;
                tasks.tasks[i].note = note;
            }
        }
        updateTasks();
    }


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#navbar-mobile-open').addEventListener('click', function() {
        document.querySelector('.navbar').classList.add('active');
    });
    document.querySelector('#navbar-mobile-close').addEventListener('click', function() {
        document.querySelector('.navbar').classList.remove('active');
    });




    updateTasks();


});