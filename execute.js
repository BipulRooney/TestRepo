// execute.js

async function collector(url) {
    const response = await fetch(`${url}`);
    return await response.json();
}

function getJson(url, ifResolve, ifReject) {
    myPromise = new Promise(function (resolve, reject) {
        json = collector(url);
        resolve(json)
    });
    myPromise.then(
        (value) => {
            ifResolve(value)
        },
        (value) => {
            ifReject(value)
        }
    );
}

myJoke = getJson('https://official-joke-api.appspot.com/random_joke', (joke => {
    gotJoke(joke)
}), (error => {
    gotNoJoke(error)
}));
// syntax is getJson('url', function if passed, function if error)
function gotJoke(joke) {
    document.write(joke["setup"]);
    document.write('<br>')
    document.write(joke["punchline"]);
}

function gotNoJoke(error) {
    document.write(error);
}
