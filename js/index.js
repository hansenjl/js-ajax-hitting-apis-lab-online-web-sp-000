function getRepositories(){
  const xml = new XMLHttpRequest();

  var username = document. ('input#username').value
      debugger;
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