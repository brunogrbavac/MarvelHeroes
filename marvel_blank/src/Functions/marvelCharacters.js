import CryptoJS from 'crypto-js';

async function marvelCharacters ( loops ){
    let pubkey = "17561c019c9686d53289392604a47bf9";
    let pvtkey = "657f5901fbae56df9a1557dfd796f16ad043973a";
    let ts = new Date().getTime();

    let message = ts+pvtkey+pubkey;
    let hash = CryptoJS.MD5(message);

    const fetchOptions={
        method:'GET',
        headers: { 'Content-Type': 'application/json'},
    };

    let array = [];
    
    for( let i=0; i<loops; i++){
        let res = await Promise.resolve(fetch(`https://gateway.marvel.com/v1/public/characters?limit=100&offset=${i*100}&ts=${ts}&apikey=${pubkey}&hash=${hash}`,fetchOptions));
        let resJSON = await res.json();
        let result = await resJSON.data.results;
        array = await [...array,...result];
    }
    return await array;
};


export default marvelCharacters;