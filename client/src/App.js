import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from "./components/Messenger"


function App() {
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_KEY}>
			<Messenger/>
		</GoogleOAuthProvider>
	);
}

export default App;
