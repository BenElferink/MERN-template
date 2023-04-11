import {useAuth} from './contexts/AuthContext'
import Header from './components/Header'
import Abc from './components/Abc'


export default function App() {
  const {isLoggedIn} = useAuth()

  return (
    // <div className='App'>
    //   <Header />

    //   {/* Render different components based on user's role */}
    //   {isLoggedIn && account && (
    //     
    //   )}
    // </div>
    <div className='App'>
      <Header />

      {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
    </div>
  )
}

const LoggedInText = () => {
  const {account} = useAuth()

  return <> {account.role === 'admin' && <Abc/>}</>
  
  {/* //       {account.role === 'admin' && <AdminComponent />} */}
  {/* //      */}
  {/* // <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p> */}
}

const LoggedOutText = () => (
  <p>Don't forget to start your backend server, then authenticate yourself.</p>
)
