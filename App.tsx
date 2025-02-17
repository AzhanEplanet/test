import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {colors, navigatorRef} from './src/utilities';
import RootNavigation from './src/navigation';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigation ref={navigatorRef} />
        </PersistGate>
      </Provider>

      <FlashMessage position="top" floating={true} />
    </GestureHandlerRootView>
  );
}

export default App;
