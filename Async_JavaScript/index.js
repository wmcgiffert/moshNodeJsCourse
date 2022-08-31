console.log('Before');
getUser(1,getRepositories);
console.log('After');


function getRepositories(user){
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos){
    getCommits(repo, displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id, callback){
    setTimeout(()=> {
        console.log('Reading a user from a database.....');
        callback({ id: id, gitHubUsername: 'gmac'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(()=>{
        console.log('Calling GitHub API');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repo, callback){
    setTimeout(()=>{
        console.log('Calling GitHub API');
        callback(['commit1']); 
    },2000);
}