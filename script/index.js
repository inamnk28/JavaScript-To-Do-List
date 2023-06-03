let theTasks = [];
let theDay = new Date()


function addToDo() {
    let objTasks = {
        id: '',
        name: document.getElementById("task").value,
        createdDate: theDay,
        completed: false,
};
theTasks.push(objTasks);
dispTasks()

function dispTasks() {
    if(document.getElementById("task").value.length < 3){
        alert("User Your Task Must At Least Have 3 Characters!!!!")
    } 
    else {
        document.getElementById("yourTasks").innerHTML += `
        <div class="task">
        <button class="tan" onclick="${objTasks.completed = true} done()">Done</button>
        <p class="text">${objTasks.name}</p>
        <button class="tan" onclick = "theTasks.slice(${theTasks.indexOf(objTasks)}, 1 dispTasks()) del()">Delete</button>
        </div>
        `
    }
}

}
