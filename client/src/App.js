import {useAuth} from './contexts/AuthContext'
import Header from './components/Header'
import Chef from './components/Chef'
import Cashier from './components/Cashier'

export default function App() {
  const {isLoggedIn} = useAuth()

  return (

    <div className='App'>
      <Header />

      {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
    </div>
  )
}

const LoggedInText = () => {
  const { account } = useAuth();

  return (
    <>
      {account.role === 'admin' && <Cashier />}
      {account.role === 'user' ? <Chef /> : null}
    </>
  );
};
const LoggedOutText = () => (
  <p>Don't forget to start your backend server, then authenticate yourself.</p>
)
