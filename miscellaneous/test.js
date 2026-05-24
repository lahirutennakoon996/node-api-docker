const axios = require('axios');

const promiseTest = async () => {
  try {
    const p1 = axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const p2 = axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');

    // const data  = await Promise.all([p1, p2]);
    const data  = await Promise.allSettled([p1, p2]);
    console.log('data: ', data);


  } catch (e) {
console.error(e);
  }
}



promiseTest();