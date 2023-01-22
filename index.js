const hireable = document.querySelector("#string");
const userName = "cruftyoldsysadmin";
const repoName = "dev-profile";
function displayDataUser(response) {
  console.log(response);
  let icon = document.querySelector("#icon");
  icon.setAttribute("src", `${response.data.avatar_url}`);

  let name = document.querySelector("#name");
  name.innerHTML = `${response.data.name}`;
name.setAttribute("href", `${response.data.html_url}`);
  let subname = document.querySelector("#subname");
  subname.innerHTML = `@${response.data.login}`;
  subname.setAttribute("href", `${response.data.html_url}`);

  let followBtn = document.querySelector("#follow");
  followBtn.setAttribute("href", `${response.data.html_url}`);

  let repos = document.querySelector("#repos");
  repos.innerHTML = `${response.data.public_repos}`;
  let reposLink = document.querySelector("#repos-link");
  reposLink.setAttribute(
    "href",
    `https://github.com/${response.data.login}?tab=repositories`
  );
  let gists = document.querySelector("#gists");
  gists.innerHTML = `${response.data.public_gists}`;
  let gistsLink = document.querySelector("#gists-link");
  gistsLink.setAttribute(
    "href",
    `https://gist.github.com/${response.data.login}`
  );
  let followers = document.querySelector("#followers");
  followers.innerHTML = `${response.data.followers}`;
  let followersLink = document.querySelector("#followers-link");
  followersLink.setAttribute(
    "href",
    `https://github.com/${response.data.login}?tab=followers`
  ); 
  
  if (`${response.data.hireable}` == "true") {
    hireable.innerHTML = "Available for hire";
  } else if (`${response.data.hireable} ` == "false") {
    hireable.innerHTML = "Not available for hire.";
  } else {
    hireable.innerHTML = "else";
  }
}

function getDataUser(userName) {

  let apiUrl = `https://api.github.com/users/${userName}`;
  axios.get(apiUrl).then(displayDataUser);
}
getDataUser(userName);

function displayDataRepo(response) {
  console.log(response);
}
function getDataRepo(repoName) {

  let apiUrl = `https://api.github.com/repos/cruftyoldsysadmin/${repoName}`;
  axios.get(apiUrl).then(displayDataRepo);
}
getDataRepo(repoName)