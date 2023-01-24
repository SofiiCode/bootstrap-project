

function displayDataUser (response){
  let userCardElement = document.querySelector("#user-card");
  let userCardHTML = `<div class="header d-flex flex-wrap justify-content-between">`;
  userCardHTML =
    userCardHTML +
    `<img src="${response.data.avatar_url}" class="rounded-circle img-start"  width="80" height="80"alt="user-photo">
                    <div class="user-name m-2">
                      <h5 class="card-title "><a href="${response.data.html_url}"  class="name-link">${response.data.name}</a></h5>
                      <p class="card-text "><a href="${response.data.html_url}"  class="sub-name-link">@${response.data.login}</a></p>
                    </div>
                    <a href="${response.data.html_url}"  class="btn btn-dark btn-follow" >Follow</a>
                </div>
                <div class="status d-flex mt-2 mb-2 p-2 text-uppercase border-light-subtle border-top border-bottom">
                  <div class="pe-3 ps-3 border-light border-end  ">
                    <h5 id="repos" class="card-title">${response.data.public_repos}</h5>
                  <p class="card-text"><a href="https://github.com/${response.data.login}?tab=repositories" >repos</a></p>
                  </div>
                  <div class=" pe-3 ps-3 border-light border-end  ">
                  <h5 id="gists" class="card-title">${response.data.public_gists}</h5>
                  <p  class="card-text"><a  href="https://gist.github.com/${response.data.login}">gists</a></p>
                  </div>
                  <div class="ps-3  ">
                    <h5 class="card-title">${response.data.followers}</h5>
                  <p class="card-text"><a   href="https://github.com/${response.data.login}?tab=followers">followers</a></p>
                  </div>
                </div>
                <div class="footer p-2 ">
                  <p class="card-subtitle fw-bold"> <a id="string" href="${response.data.html_url}"></a></p>
                </div>`;

  
  userCardHTML = userCardHTML + `</div>`;
  userCardElement.innerHTML = userCardHTML;

    if (`${response.data.hireable}` == "true") {
        let footer = document.querySelector('#string') 
      footer.innerHTML = "Available for hire";
    } else if (`${response.data.hireable} ` == "false") {
        let footer = document.querySelector("#string"); 
      footer.innerHTML = "Not available for hire";
    } else {
        let footer = document.querySelector("#string"); 
      footer.innerHTML = "else";
    }
}

function getDataUser() {
let userName = document.querySelector("#user-name").innerHTML;
  let apiUrl = `https://api.github.com/users/${userName}`;
  axios.get(apiUrl).then(displayDataUser);
}
getDataUser();

function displayDataRepo(response) {
  console.log(response);
  let userRepoElement = document.querySelector("#repo-card");
 
  let userRepoHTML = `<div class="header d-flex justify-content-between">`;
    userRepoHTML =
      userRepoHTML +
      `<img src="${response.data.owner.avatar_url}" class="rounded-circle img-start"  width="80" height="80"alt="user-photo">
                    <div class="user-name ms-1">
                      <h5 class="card-title "><a href="${response.data.html_url}" class="repo-name-link">${response.data.name}</a></h5>
                      <p class="card-text ">Forked by: <a href="${response.data.owner.html_url}" class="sub-name-link">@${response.data.owner.login}</a></p>
                    </div>
                    <a href="${response.data.html_url}" class="btn btn-dark btn-follow" >Star</a>
                </div>
                <div class="git-description border-bottom  d-flex mt-2 mb-2 p-2 ">
                  <div class="pe-3 ps-3 fs-6">
                  <p class="card-text">The unofficial GitHub Cards. Card for your GitHub profile, card for your GitHub repositories.
                    <a  href="https://lab.lepture.com/github-cards/" >lab.lepture.com/github-cards</a>
                  </p>
                  </div>
                </div>
                <div class="footer d-flex text-uppercase">
                  <div class="ps-2  d-flex ">
                    <p class="fw-bold m-0 pe-1">${response.data.forks}</p>
                    <p class="card-text">forks</p>
                  </div>
                  <div class="ps-2 d-flex ">
                    <p class="fw-bold m-0 pe-1">1</p>
                    <p class="card-text">stars</p>
                  </div>
                  </div>`;
  userRepoHTML = userRepoHTML + '</div>';
                  userRepoElement.innerHTML = userRepoHTML
}
function getDataRepo() {
let repoName= document.querySelector('#repo-name').innerHTML
  let apiUrl = `https://api.github.com/repos/cruftyoldsysadmin/${repoName}`;
  axios.get(apiUrl).then(displayDataRepo);
}
getDataRepo()