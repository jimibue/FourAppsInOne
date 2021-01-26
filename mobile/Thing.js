import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

export default ({navigation, route}) => {
  const {id, name, likes, anythingElse} = route.params;

  useEffect(() => {
    // let res = axios.get(`/api/things/${id}`)
  });
  return (
    <View>
      <Text>THING SHOW PAGE HERE</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{likes}</Text>
    </View>
  );
};
