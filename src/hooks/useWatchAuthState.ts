import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import { useAppDispatch } from '../store/hooks';
import { updateUser } from '../store/auth';

const useWatchAuthState = () => {
  const dispatch = useAppDispatch();
  // const isReady = useRef(false);

  useEffect(() => {
    return auth().onAuthStateChanged(user => {
      dispatch(updateUser(user));

      // if (!isReady.current) {
      //   isReady.current = true;
      //   // TODO: hide Splash Screen (soon)
      // }
    });
  }, [dispatch]);
};

export default useWatchAuthState;
