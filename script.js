var tasks = {};

var getTasks = function () {
  tasks = localStorage.getItem("tasks")
  if (!savedTasks) {
    tasks = $('textarea')
  }
  tasks= JSON.parse(savedTasks)
};

var saveTask = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var auditTask = function() {

};