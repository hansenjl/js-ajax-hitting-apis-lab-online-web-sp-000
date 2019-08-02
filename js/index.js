function getRepositories(){
  const xml = new XMLHttpRequest();
  debugger;
  var username = $('input#username').value
    
  xml.addEventListener('load', displayRepositories);
  xml.open("GET", `https://api.github.com/users/${username}/repos`);
  xml.send();

}

function displayRepositories(){
  debugger;
  $('#repositories').html = ""
}


function getCommits(el){
  
}

function displayCommits(){
  
}

function getBranches(){
  
}

function displayBranches(){
  
}