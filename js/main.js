let addButton = document.getElementById('add-button')
let taskInput = document.getElementById('task-input')

addButton.addEventListener('click', function (e) {
    if (taskInput.value === ''){
        alert('You should enter task name!');
    }
    
    else{
        let task = taskInput.value
        let lists = document.getElementById('lists')
        let newList = document.createElement('li');
        let ListDiv = document.createElement('div');
        let paragraph = document.createElement('p');
        let buttContainer = document.createElement('div');
        let editBut = document.createElement('button');
        let deleteBut = document.createElement('button');

        paragraph.textContent = task;
        deleteBut.textContent = 'Delete';
        editBut.textContent = 'Edit';
        
        buttContainer.appendChild(editBut);
        buttContainer.appendChild(deleteBut);
        ListDiv.appendChild(paragraph);
        ListDiv.appendChild(buttContainer);
        newList.appendChild(ListDiv);
        lists.appendChild(newList);


        deleteBut.addEventListener('click', function (e){
            let target = this.parentNode.parentNode.parentNode;
            target.remove();
        });

        editBut.addEventListener('click', function (e){
            let target = this.parentNode.previousSibling;
            let newName = prompt('New task name:', target.textContent);
            if (newName !== ''){
                target.textContent = newName;
            }
        });

        taskInput.value = ''
    }
});
 