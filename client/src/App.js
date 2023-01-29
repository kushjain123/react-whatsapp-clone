import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./components/Messenger"
import AccountProvider from './context/AccountProvider';


function App() {
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_KEY}>
			<AccountProvider>
				<Messenger/>
			</AccountProvider>
		</GoogleOAuthProvider>
	);
}

export default App;
