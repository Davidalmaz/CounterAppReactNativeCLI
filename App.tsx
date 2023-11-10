/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, SafeAreaView, useColorScheme, Image} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import Counter from './src/components/Counter';
import ButtonRedux from './src/components/ButtonRedux';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store = {store}>
      <SafeAreaView>
        <Counter/>
        <ButtonRedux/>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
