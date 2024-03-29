// const p = Promise.resolve({id:1});
// p.then(result => console.log(result));

// const p2 = Promise.reject(new Error('reason for rejection.....'));
// p.catch(error => console.log(error));

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        console.log('Async operation 1....');
        reject(new Error('reason for rejection'));
    },2000);
});
const p2 = new Promise((resolve)=>{
    setTimeout(()=> {
        console.log('Async operation 2....');
        resolve(2);
    },2000);
});


Promise.allSettled([p1,p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error:',err.message));