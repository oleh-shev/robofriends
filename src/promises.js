fetch('https://swapi.co/api/starships/9/')
    .then(response => response.json())
    .then(console.log);

//1
const starships = async function () {
    const response = await fetch('https://swapi.co/api/starships/9/');
    const ships = await response.json();
    console.log(ships)
};

starships();


//2

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function () {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
    ));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
}


const getUserData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async function (url) {
                const response = await fetch(url);
                return response.json();
            }
        ));
        console.log("users", users);
        console.log("posts", posts);
        console.log("albums", albums);

    } catch (e) {
        console.log("Ooops", e);
    }
};

