function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
function retrieveEmployeeInformation(){
  return document.body.querySelector('input').value
}
function addNewElementAsLi(){
  const name = retrieveEmployeeInformation()
  const targetUl = document.getElementById('employee-list')
  let element = createElement('li')
  element.innerHTML = name
}
