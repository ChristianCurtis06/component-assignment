import { useEffect, useState } from 'react';
import { func } from 'prop-types';
import axios from 'axios';

// Task 1: Sign Up for API Key
const hash = '37886931d7112b2faba57f9dd855917e';
const publicKey = '65f6c3c02d551d550b145f091228b25c';
const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;

// Task 2: Fetch and Display Characters
const CharacterList = ({ onSelectCharacter }) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(apiUrl);
            setCharacters(response.data.data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching characters:', error)
            setError(error.toString());
            setLoading(false);
        }
    };

    if (loading) return <p className='alert-text'>Loading characters...</p>;
    if (error) return <p className='alert-text'>Error fetching characters: {error}</p>;

    return (
        <div className='character-list'>
            <h1>MARVEL Characters</h1>
            <div className='character-grid'>
                {characters && characters.map(character => (
                    <div key={character.id} className='character-box' onClick={() => onSelectCharacter(character.id)}>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`Image of ${character.name}`} />
                        <h3>{character.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

CharacterList.propTypes = {
    onSelectCharacter: func
}

export default CharacterList;