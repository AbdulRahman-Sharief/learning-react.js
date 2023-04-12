import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Definition() {
    const [word, setWord] = useState();

    useEffect(() => {
        /*fetch('https://api.dictionaryapi.dev/api/v2/entries/en/helicopter')
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
            });*/
        async function logJSONData() {
            const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello");
            const jsonData = await response.json();
            console.log(jsonData);
            setWord(jsonData[0].meanings);
            console.log(jsonData[0].meanings);
        }
        logJSONData();

    }, []);

    return (
        <>
            <h1>Here is a definition:</h1>
            {word
                ? word.map((meaning) => {
                    return (
                        <p key={uuidv4()}>
                            {meaning.partOfSpeech + ': '}
                            {meaning.definitions[0].definition}
                        </p>
                    );
                })
                : null}
        </>
    );
}