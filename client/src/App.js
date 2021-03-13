import './styles/styles.css';
import { useAuth } from './contexts/AuthContext';

export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className='App'>
      <h1>{isLoggedIn ? <LoggedInText /> : <LoggedOutText />}</h1>
    </div>
  );
}

const LoggedInText = () => (
  <>
    You are (not really) logged in,
    <br />
    check your console.log()
  </>
);

const LoggedOutText = () => (
  <>
    Don't forget to start your backend server,
    <br />
    then hit refresh and see what happens...
  </>
);
