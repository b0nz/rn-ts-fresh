import React from 'react';
import Todo from '../components/Todo';
import {FlatList, View} from 'react-native';

const SettingsScreen: React.FC = () => {
  const DATA: {id: string; text: string; isComplete: boolean}[] = [
    {id: '1', text: 'mangan', isComplete: false},
    {id: '2', text: 'turu', isComplete: false},
    {id: '3', text: 'kerjo', isComplete: true},
  ];

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Todo text={item.text} completed={item.isComplete} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SettingsScreen;
