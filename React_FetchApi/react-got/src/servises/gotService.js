export default class gotService {
    
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
       async getAllCharacters() {
 //return  this.getResours('/characters?page=5&pageSize=10');
        const res = await this.getResours('/characters?page=5&pageSize=10');
              return res.map(this._transformCharacter);
        }
        async getCharacter(id) {
//return  this.getResours(`/characters/${id}`);
        const character = await this.getResours(`/characters/${id}`);
              return this._transformCharacter(character);
        }
        async getAllHouses() {
//return this.getResours('/houses?page=5&pageSize=10');
            const houses = await this.getResours('/houses?page=5&pageSize=10');
            return houses.map(this._transformHouse);
        }
    
        async getHouse(id){
//return this.getResours(`/houses/${id}`);
            const house = await this.getResours(`/houses/${id}`);
            return this._transformHouse(house);
        }
        async getAllBooks() {
//return this.getResours('/books');
            const books = await this.getResours('/books');
            return books.map(this._transformBook);
        }
        async getBook(id) {
//return this.getResours(`/books/${id}`);
            const book = await this.getResours(`/books/${id}`);
            return this._transformBook(book);
        }
                    

        _transformCharacter(char){
            for(let key in char){
             if(!char[key]){
                 const val = 'NO DATA';
                 char[key] = val;
                
             }
             
                // console.log(`${key}: ${char[key]}`);
            }
             return {
              name: char.name,
              gender: char.gender,
              born: char.born,
              died: char.died,
              culture: char.culture,
              url: char.url
          }    
        }
          

        _transformHouse(house){
            return {
                name: house.name,
                region: house.region,
                words: house.words,
                titels: house.titels,
                overlord: house.overlord,
                ancestralWeapons: house.ancestralWeapons
            }
        }

        _transformBook(book){
            return {
                name: book.name,
                numberOfPages: book.numberOfPages,
                publiser: book.publiser,
                released: book.released
            }
        }
       
    }
    
    
    