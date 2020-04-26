import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import RootNavigation from './navigations/RootNavigation';
import {persistor, store} from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<View />} persistor={persistor}>
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
