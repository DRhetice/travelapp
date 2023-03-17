import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Rechercher dans votre fichier JS ici avec la valeur de searchTerm
  };

  return (
    <View>
      <TextInput
        placeholder="Rechercher..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Rechercher" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;
/*import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import data from './data.js';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.filter(item => item.nom === searchTerm);
    setSearchResults(results);
  };

  return (
    <View>
      <TextInput
        placeholder="Recherche"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      <Button title="Rechercher" onPress={handleSearch} />
      {searchResults.map(item => (
        <View key={item.nom}>
          <Text>{item.nom}</Text>
          <Text>{item.profession}</Text>
          <Text>{item.age}</Text>
        </View>
      ))}
    </View>
  );
};

export default SearchBar;
*/