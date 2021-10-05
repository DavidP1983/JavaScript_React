
                         
                        //GET

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((respone) => respone.json())
// .then((myJson) => console.log(myJson));


                    //POST

/*let url = 'https://jsonplaceholder.typicode.com/posts/',
    data = {username: 'example'};

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type':'application/json'}
})
.then((respone) => respone.json())
.then((myJson) => console.log('Success', myJson))
.catch(error => console.error('Error', error));*/


                //Async/Await


/*const getResours = async (url) =>{
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url} status: ${res.status}`);
    }

    const    some = await res.json();
 return some;
}

getResours('https://jsonplaceholder.typicode.com/posts/10000')
.then((myJson) => console.log('Success',myJson))
.catch(error => console.error(error))*/


class GotService {
constructor(){
    this._apiBase = 'https://www.anapioficeandfire.com/api';
}
    async getResours(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }

        return await res.json();
    }
    getAllCharacters() {
       return  this.getResours('/characters?page=5&pageSize=10');
    }
    getCharacter(id) {
        return  this.getResours(`/characters/${id}`);

    }
    getAllHouses() {
        return this.getResours('/houses?page=5&pageSize=10');
    }

    getHouses(id){
        return this.getResours(`/houses/${id}`);
    }
    getAllBooks() {
        return this.getResours('/books');
    }
  
}


const got = new GotService();

got.getAllCharacters()
//    .then(res => console.log(res));
.then(res => res.forEach(item => console.log(item.url.slice(-2))));
    //   .then(res => res.forEach(item => console.log(item.name)));

got.getCharacter(130)
   .then(res => console.log(res));

got.getAllHouses()
   .then(resHouse => resHouse.forEach(item => console.log('\n',item.name)));

got.getHouses(130)
   .then(resHouse => console.log(resHouse));

   got.getAllBooks()
   .then(resBooks => console.log('\n',resBooks));

got.getAllBooks()
   .then(resBooks => resBooks.forEach(item => console.log('\n',item.name)));



// getResours('https://jsonplaceholder.typicode.com/posts/10000')
// .then((myJson) => console.log('Success',myJson))
// .catch(error => console.error(error))