export default class gotService {
    
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
         getResours= async (url) => {
            const res = await fetch(`${this._apiBase}${url}`);
    
            if (!res.ok) {
                throw new Error(`Could not fetch ${url} status: ${res.status}`);
            }
    
            return await res.json();
        }
        getAllCharacters = async () => {
 //return  this.getResours('/characters?page=5&pageSize=10');
        const res = await this.getResours('/characters?page=5&pageSize=10');
              return res.map(this._transformCharacter);
        }
        getCharacter = async (id) => {
//return  this.getResours(`/characters/${id}`);
        const character = await this.getResours(`/characters/${id}`);
              return this._transformCharacter(character);
        }
        getAllHouses = async () => {
//return this.getResours('/houses?page=5&pageSize=10');
            const houses = await this.getResours('/houses?page=5&pageSize=10');
            return houses.map(this._transformHouse);
        }
    
        getHouse = async (id) => {
//return this.getResours(`/houses/${id}`);
            const house = await this.getResours(`/houses/${id}`);
            return this._transformHouse(house);
        }
        getAllBooks = async () => {
//return this.getResours('/books');
            const books = await this.getResours('/books/');
            return books.map(this._transformBook);
        }
        getBook = async (id) => {
//return this.getResours(`/books/${id}`);
            const book = await this.getResours(`/books/${id}`);
            return this._transformBook(book);
        }
            
        isSet(data){
            if(data){
                return data
            }else{
                return 'NO DATA'
            }
        }

        _transformCharacter = (char) => {
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
          

        _transformHouse = (house) => {
            return {
                name: this.isSet(house.name),
                region: this.isSet(house.region),
                words: this.isSet(house.words),
                titels: this.isSet(house.titels),
                overlord: this.isSet(house.overlord),
                ancestralWeapons: this.isSet(house.ancestralWeapons),
                url: this.isSet(house.url)
            }
        }

        _transformBook = (book) =>{
            return {
                name: this.isSet(book.name),
                numberOfPages: this.isSet(book.numberOfPages),
                publiser: this.isSet(book.publiser),
                released: this.isSet(book.released),
                url: this.isSet(book.url)
            }
        }
       
    }
    
    
    