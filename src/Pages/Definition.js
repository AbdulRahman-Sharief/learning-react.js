import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../Components/NotFound';
import DefinitionSearch from '../Components/DefinitionSearch';

export default function Definition() {
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    const [Error, setError] = useState(false);
    const Navigate = useNavigate();
    // console.log(useParams());
    let { search } = useParams();
    useEffect(() => {
        /*fetch('https://api.dictionaryapi.dev/api/v2/entries/en/helicopter')
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
            });*/
        async function logJSONData() {
            const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search);
            if (response.status === 404) {
                setNotFound(true);
            } else if (response.status === 401) {
                Navigate('/login');
            } else if (response.status === 500) {
                setError(true);
            }
            if (!response.ok) {
                setError(true)
                console.log(new Error('Something went wrong'))
            };

            const jsonData = await response.json();
            // console.log(jsonData);
            setWord(jsonData[0].meanings);
            console.log(jsonData[0].meanings);
        }
        logJSONData();

    }, []);
    if (notFound === true) {
        return (
            <>
                <NotFound />
                <Link to='/dictionary'>Search Another</Link>
            </>)
    }
    if (Error === true) {
        return (
            <>
                <p>Something went wrong , please try again</p>
                <Link to='/dictionary'>Search Another</Link>
            </>)
    }
    return (
        <>
            {word
                ? <>
                    <h1>Here is a definition:</h1>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                {meaning.partOfSpeech + ': '}
                                {meaning.definitions[0].definition}
                            </p>
                        );
                    })}
                    <p>Search Again : </p>
                    <DefinitionSearch />
                </> : null}
        </>

    );
}