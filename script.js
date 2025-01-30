const addTaskBtn=document.getElementById('addTaskBtn');
const taskList=document.getElementById('taskList');

addTaskBtn.addEventListener('click',()=>{
    const newTask=document.getElementById('newTask').value ;
    if (newTask){
        const taskDiv=document.createElement('div');
        taskDiv.className='taskDiv';
        taskDiv.id=`task-${Date.now()}`;
        taskDiv.draggable=true;
        taskDiv.innerHTML=`
        <li>${newTask}</li>
        `;
        addEventDragger(taskDiv);
        taskList.appendChild(taskDiv);
        document.getElementById('newTask').value ='';
    };
});

function addEventDragger(taskDiv){
    taskDiv.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text/plain',e.target.id);
        setTimeout(()=>{taskDiv.style.display='none'},0);
    });

    taskDiv.addEventListener('dragend',()=>{
        taskDiv.style.display='block';
    });
}

const pendingList = document.getElementById('pendingList');

pendingList.addEventListener('dragover',(e)=>{
    e.preventDefault();
});

pendingList.addEventListener('drop',(e)=>{
    e.preventDefault();
    const dragItemId = e.dataTransfer.getData('text/plain');
    const dragItem = document.getElementById(dragItemId);

    if (dragItem){
        pendingList.appendChild(dragItem);
    }
});