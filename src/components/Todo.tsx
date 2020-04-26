import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  text: string;
  completed: boolean;
}

const Todo: React.FC<Props> = (props) => {
  return (
    <View>
      <Text style={{color: props.completed ? 'red' : 'yellow'}}>{props.text}</Text>
    </View>
  );
};

export default Todo;
