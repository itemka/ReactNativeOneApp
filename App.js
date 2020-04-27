import React, { useState } from 'react';
import { AppLoading } from 'expo'; //❗️
import { loadApplication } from './utils/helper';
import { Layout } from './containers/Layout';
import { TodoState } from './context/todo/state';
import { ScreenState } from './context/screen/state';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  //❗️
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <Layout />
      </TodoState>
    </ScreenState>
  );
};
