let todo = [];
let req = prompt("Please enter your request");
console.log(req);

while(true) {
  if(req == "quit") {
    alert("Quitting app");
    console.log("Quitting app");
    break;
  }
  if(req == "list") {
    console.log("-----------------");
    for(i=0; i<todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("-----------------");
    alert("View the list in console.");
  } else if(req == "add") {
    let task = prompt("Enter the task you want to add");
    todo.push(task);
    alert(`${task} task added.`);
    console.log(`${task} task added.`);
  } else if(req == "delete") {
    let idx = prompt("Enter the index of the task you want to delete");
    let deletedTask = todo.splice(idx, 1);
    alert(`${deletedTask} task deleted.`);
    console.log(`${deletedTask} task deleted.`);
  } else {
    prompt("Wrong request");
  }
  req = prompt("Please enter your request");
}