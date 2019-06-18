function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function preventRefreshOnSubmit()
function retrieveEmployeeInformation(){
  return document.body.querySelector('input').value
}
