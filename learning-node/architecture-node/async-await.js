// The best way to work with async code is to using async-await

const promiseFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() < 0.5){
            resolve('Hello World');
        } else {
            reject(new Error('Hello Error'));
        }
    }, 1000)
});

async function asyncAwait() {
    try {
        const msg = await promiseFunction();
        console.log('message', msg);

    } catch (err) {
        console.log('error', err);
    }
}

asyncAwait();