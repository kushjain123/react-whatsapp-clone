import { lazy, Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_KEY}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
