function getRepositories(){
  const xml = new XMLHttpRequest();

  var username = document.querySelector('input#username').value
      debugger;
  xml.addEventListener('load', displayRepositories);
  xml.open("GET", `https://api.github.com/users/${username}/repos`);
  xml.send();

}

function displayRepositories(){
  debugger;
  var repos = this.responseText
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