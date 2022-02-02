

class MarvelServices {
    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "apikey=4f42fd5e93d0afbb44a71fd347850eed";
    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fatch ${url} status: ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);

    }
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    emptyData = (data) => {
        if (!data) {
            return <span style={{ color: 'red' }}>Description is not available</span>
        } if (data.length > 228) {
            return `${data.substr(0, 228)}...`;
        } else {
            return data;
        }
    }

   
    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: this.emptyData(char.description),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

}



export default MarvelServices;


