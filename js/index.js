function getRepositories(){
  let xml = new XMLHttpRequest();
  let username = $('input#username').value
    debugger;
  xml.open("GET", `users/${username}/repos`, true);
  xml.send();

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