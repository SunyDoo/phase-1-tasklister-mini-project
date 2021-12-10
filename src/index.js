document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  let btn = document.getElementById('btn')
  btn.addEventListener('click', handleDelete)
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    buildTaskList(e.target.newtaskdescription.value)
    form.reset()
      })
});

function buildTaskList(description){
  let option = document.createElement('option')
  option.textContent = `${description} `
  document.querySelector('#tasks').appendChild(option)
  console.log(document.querySelector('option'))
}



function handleDelete(e){ 
  console.log(option[0])
  e.option[0].remove()
}





  