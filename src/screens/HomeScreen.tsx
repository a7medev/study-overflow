import React from 'react';
import Screen from '../components/styled/Screen';
import TextField from '../components/styled/TextField';

import Typo from '../components/styled/Typo';

const HomeScreen: React.FC = () => {
  return (
    <Screen>
      <Typo variant="h1">الرئيسية</Typo>
      <TextField placeholder="اكتب هنا..." />
    </Screen>
  );
};

export default HomeScreen;
