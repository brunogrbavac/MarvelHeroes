import DamerauLevenshtein from "./Damerau–Levenshtein";

const similarity = ( word, character ) => {

    let similarityGrade = 0;
    let distance = 0;
    let string = "";

    // Slučaj točno određenog id-ja poklapanja
    if( character.id === word ){ return 100 }; 
    //točno unešeno ime - kasnije računati DL distanca i startsWith mogu dati 100 za više verzija junaka npr. Hulk i Red Hulk - bitno da pvoi ispise Hulka
    if( character.name.toLowerCase() === word.toLowerCase() ){ return 100 }; 

    // u ostalim slučajevima uzima se najviša moguća sličnost sa imenom/serijom/stripom
    // Slučaj pretrage po imenu, računa se za svaku riječ imena poklapanje sa pretraženim pomoću Damerau–Levenshtein distance (distanca 0 => sličnost 100) => ovaj blok implementira toleranciju na greške unosa
    for(let part of character.name.split(" ")){
        distance = DamerauLevenshtein( word, part );
        let temp = (Math.abs( Math.max( part.length, word.length ) - distance )/Math.max( part.length, word.length ))*95;
        similarityGrade = Math.max( temp, similarityGrade );
    };
    
    // Za  lsučaj višedjelnog unosa pa računamo usporedbu s čitavim imenom
    distance = DamerauLevenshtein( word, character.name );
    let temp = (Math.abs( Math.max( character.name.length, word.length ) - distance )/Math.max( character.name.length, word.length ))*95;
    similarityGrade = Math.max( temp, similarityGrade );

    // Počimanje imena s unosenim smatra se srednje jakim podudaranjem - npr. unos "a" nije baš nekakvo podudaranje
    if(character.name.toLowerCase().startsWith(word.toLowerCase())){ similarityGrade = Math.max(70,similarityGrade) };

    // Ukoliko je tražena riječ dio naslova nekog od stripova tog lika, ocjena podudaranja pretraživanja je 60
    for( let comic of character.comics.items){
        string = string + comic.name;
    };
    if(string.toLowerCase().includes(word.toLowerCase())){ similarityGrade = Math.max(60,similarityGrade) };

    // Ukoliko je tražena riječ dio naslova neke od serija tog lika, ocjena podudaranja pretraživanja je 60
    for( let serie of character.series.items){
        string = string + serie.name;
    };
    if(string.toLowerCase().includes(word.toLowerCase())){ similarityGrade = Math.max(60,similarityGrade) };

    return similarityGrade
};


const filter = ( word, characters ) => {
    
    // Ukoliko je vrijednost pretraživanja izbrisana
    if(word===""){ return characters };

    //Vrši se ocjena sličnosti podataka likova s pretraženom riječju, po ocjeni se likovi sortiraju i prikazuju
    let charactersAndGrades = [];

    for(let character of characters){
        
        let grade = similarity(word, character);
        //Sortiranje bitno usporava rad aplikacije, stoga ovdje odbacujemo veći dio likova
        if(grade>20){
            charactersAndGrades.push({character:character, grade:grade});
        };
    };

    let filteredCharacters = charactersAndGrades.sort((a, b) => (a.grade < b.grade) ? 1 : -1);
    filteredCharacters = filteredCharacters.slice(0,20);
    //Stvaramo niz bez običnih character objekata bez ocjene sličnosti
    filteredCharacters=filteredCharacters.map(character => character.character);

    return filteredCharacters;
};

export default filter;