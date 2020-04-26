import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {connect} from 'react-redux';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {User} from '../types';
import {fetchUser} from '../actions/usersActions';
import {AppTabParamList} from '../navigations/RootNavigation';

export interface HomeProps {
  fetchUser: typeof fetchUser;
  user: User;
  navigation: BottomTabNavigationProp<AppTabParamList, 'Home'>;
  route: RouteProp<AppTabParamList, 'Home'>;
}

const HomeScreen: React.FC<HomeProps> = (props) => {
  const {fetchUser} = props;

  useEffect(() => {
    fetchUser('1');
  }, []);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello World</Text>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.users.user,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
