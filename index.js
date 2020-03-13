
document.querySelector('form').addEventListener('submit',function getRepos(event){
    
    event.preventDefault();
    let user = document.getElementById("user_name").value;
    alert(user);
    fetch(`https://api.github.com/users/${user}/repos`)
    .then(resp => {
        console.log(resp);
        if(resp.ok){
            return resp.json();
        }
       
            throw new Error(resp.statusText);
        
    })
    .then(resp => displayRepos(resp))
    .catch(err => {
       return `Something went wrong ${err.message}`
    });
}
);
function displayRepos(repos){
    repos.forEach((repo) => {
        document.querySelector("#repos_box").innerHTML += `<p>Name: ${repo.name}</p><p>Repository URl: <a href=${repo.clone_url}>${repo.clone_url}</a></p><br/>`
    })
    
}
