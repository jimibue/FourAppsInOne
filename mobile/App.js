import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, View} from 'react-native';
import axios from 'axios';

const App = () => {
  const [things, setThings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getThings();
    }, 2000);
  }, []);

  const getThings = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/things');
      setThings(res.data);
      console.log(res.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError('Error Occured');
      setLoading(false);
    }
  };

  const renderThings = () => {
    return things.map((thing) => {
      return (
        <View key={Math.random()}>
          <Text>{thing.name}</Text>
          <Text>likes: {thing.likes}</Text>
        </View>
      );
    });
  };

  const renderContent = () => {
    if (loading) return <Text>loading</Text>;
    if (error) return <Text>error occured</Text>;
    return renderThings();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>{renderContent()}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
