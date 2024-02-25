// Function to add a new task
function addTask() {
    var inputValue = document.getElementById("taskInput").value;
    if (inputValue.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";

    // Add delete button
    var deleteButton = document.createElement("span");
    deleteButton.className = "delete";
    deleteButton.innerHTML = "&times;";
    deleteButton.onclick = function() {
        li.parentNode.removeChild(li);
    };
    li.appendChild(deleteButton);
}

// Add task when "Add Task" button is clicked
document.getElementById("addButton").addEventListener("click", addTask);

// Add task when "Enter" key is pressed in the input field
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
