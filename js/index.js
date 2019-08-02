function getRepositories(){
  let xml = new XMLHttpRequest();
  xml.open("GET", `users/${}/repos`, true);
  xml.send();
  debugger
}

function displayRepositories(){
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