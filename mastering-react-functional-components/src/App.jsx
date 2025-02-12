import { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './CharacterStyles.css';

// Task 4: Integrating Components and Updating the User Interface
const App = () => {
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    const handleCharacterSelected = (characterId) => {
        setSelectedCharacterId(characterId);
    };

    return (
        <div>
            <CharacterDetail 
                selectedCharacterId={selectedCharacterId}
            />
            <CharacterList
                onSelectCharacter={handleCharacterSelected}
            />
        </div>
    );
};

export default App;
