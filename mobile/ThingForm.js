import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

export default ThingForm = ({navigation}) => {
  // const {addThing} = useContext(DataProvider)
  const [name, setName] = useState('');
  const [likes, setLikes] = useState('');

  const handleSubmit = async () => {
    try {
      let res = await axios.post('http://localhost:3001/api/things', {
        name,
        likes,
      });
      // addThing(res.data)
      navigation.navigate('Things', {data: res.data});
    } catch (err) {
      console.log(err);
      alert('failed');
    }
  };
  return (
    <View>
      <Text>THING FORM HERE!</Text>
      <Text>Name</Text>
      <TextInput
        style={{height: 40, borderColor: '#bbb', borderWidth: 1}}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text>Likes</Text>
      <TextInput
        style={{height: 40, borderColor: '#bbb', borderWidth: 1}}
        value={likes}
        onChangeText={(text) => setLikes(text)}
      />
      <Button title="add" onPress={handleSubmit}></Button>
    </View>
  );
};
