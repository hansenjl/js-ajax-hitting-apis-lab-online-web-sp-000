function getRepositories(){
  let xml = new XMLHttpRequest();
    debugger;
  xml.open("GET", `users/${"word"}/repos`, true);
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