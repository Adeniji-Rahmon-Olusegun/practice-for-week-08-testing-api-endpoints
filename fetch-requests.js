/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here
(async function() {
  let resObjs = await fetch("/posts");
  let resBody = await resObjs.json();
  console.log(resBody);
})();


/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/
const options = {
  method: "POST",

  body: JSON.stringify({
    message: "New Post!!!"
  }),

  headers: {
    "Content-Type": "application/json"
  }
};

(async function() {
  let resObj = await fetch("/posts", options);
  let resBody = await resObj.json();
  console.log(resBody);
})()

// Your code here