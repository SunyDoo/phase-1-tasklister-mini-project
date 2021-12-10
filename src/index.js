document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    buildTaskList(e.target.newtaskdescription.value)
    form.reset()
      })
});

function buildTaskList(description){
  let li = document.createElement('li')
  let btn =  document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${description} `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}