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
  let targetUl = document.getElementByClass('employee-list')
  let element = document.createElement('li')
  element.innerHTML = name
  targetUl.appendChild(element)
}
