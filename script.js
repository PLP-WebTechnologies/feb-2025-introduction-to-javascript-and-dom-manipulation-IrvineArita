//Add new task
document.getElementById("add-task").addEventListener("click", () => {
    const input= document.getElementById("task-input");
    const taskText = input.ariaValueMax.trim();

    if (taskText !== ""){
        const li = document.createElement("li");
        li.textContent = taskText;

        //Remove task when clicked
        li.addEventListener("click", () => {
            li.remove();
  });

  document.getElementById("task-list").appendChild(li);
  input.value = "";
}
});
  
  // Clear all tasks
  document.getElementById("clear-tasks").addEventListener("click", () => {
    document.getElementById("task-list").innerHTML= "";
  });

  //Change title style
  document.getElementById("change-style").addEventListener("click", () =>{
    const title = document.getElementById("main-title");
    title.style.color = "green";
    title.style.fontStyle = "italic";
  });
  
   //Change title text
   document.getElementById("change-text").addEventListener("click", () =>{
    document.getElementById("main-title").textContent = "Tasks for Today!";
  });