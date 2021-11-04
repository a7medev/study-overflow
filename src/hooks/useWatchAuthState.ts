import { useEffect, useRef } from 'react';
import BootSplash from 'react-native-bootsplash';
import auth from '@react-native-firebase/auth';

import { useAppDispatch } from '../store/hooks';
import { updateUser } from '../store/auth';

import serializableUser from '../utils/serializableUser';

const useWatchAuthState = () => {
  const dispatch = useAppDispatch();
  const isReady = useRef(false);

  useEffect(() => {
    return auth().onAuthStateChanged(user => {
      dispatch(updateUser(serializableUser(user)));

      if (!isReady.current) {
        isReady.current = true;
        BootSplash.hide({ fade: true });
      }
    });
  }, [dispatch]);
};

export default useWatchAuthState;
