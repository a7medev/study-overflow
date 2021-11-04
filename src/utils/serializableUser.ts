import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import User from '../types/User';

const serializableUser = (user: FirebaseAuthTypes.User | null): User | null => {
  if (!user) {
    return null;
  }

  return {
    uid: user.uid,
    name: user.displayName,
    photo: user.photoURL,
    email: user.email,
    phone: user.phoneNumber,
    emailVerified: user.emailVerified,
    isAnonymous: user.isAnonymous,
    provider: user.providerId,
  };
};

export default serializableUser;
