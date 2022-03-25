import { useHttp } from "../../Hooks/http.hook";

const  useMarvelServices = () =>  {
   const {loading, error, request, clearError} = useHttp();

   const  _apiBase = "https://gateway.marvel.com:443/v1/public/";
   const  _apiKey = "apikey=4f42fd5e93d0afbb44a71fd347850eed";
   const  _baseOffset = 210;
   const _name = 'Zarek';

    


   const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);

    }
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }
    const getAllComics = async (offset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return  _transformComics(res.data.results[0]);
    }

    const getCharacterName = async (offset = _name) => {
        const res = await request(`${_apiBase}characters?name=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

   const  emptyData = (data) => {
        if (!data) {
            return <span style={{ color: 'red' }}>Description is not available</span>
        } if (data.length > 220) {
            return `${data.substr(0, 220)}...`;
        } else {
            return data;
        }
    }

   const titleLength = (data) => {
       if(data.length > 53) {
           return `${data.substr(0, 53)}...`;
       }else {
           return data;
       }
   }

   const  _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: emptyData(char.description),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    }

    const _transformComics = (char) => {
        return {
            comicsId: char.id,
            title: titleLength(char.title),
            comicsThumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            price: char.prices[0].price,
            // price: char.prices.price ? `${char.prices.price}$` : 'not available'
            description: emptyData(char.description),
            // description: char.description || 'There is no description' -> так как там строки " "
            pages: char.pageCount ? `${char.pageCount} p.` : 'No information about the number of pages',
            language: char.textObjects.language || 'en-us',


        }
        
    }

   

    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics, getCharacterName}
}



export default useMarvelServices;


