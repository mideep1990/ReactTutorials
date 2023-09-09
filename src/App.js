import './App.css';
import { useRef, useState } from 'react';
import WelcomeGuest from './components/WelcomeGuest';
import WelcomeUser from './components/WelcomeUser';

function App() {
  const userRef = useRef('');
  const pwdRef = useRef('');
  const [isLoggedIn,SetisLoggedIn] = useState(false)
  const [UserName,SetUserName] = useState('')
  const login = () => {
      if(userRef.current.value==='Deepankar' &&
      pwdRef.current.value === 'test')
      {
        SetisLoggedIn(true)
        SetUserName(userRef.current.value)
      }
      else{
        SetUserName('GUEST')
      }
  }


  return(
  <>
   {!isLoggedIn && UserName!=='GUEST' && 
   <section>
    <div>
      <label>Username</label><br/>
      <input type="text" ref={userRef}/>
    </div>
    <div>
      <label>Password</label><br/>
      <input type="password" ref={pwdRef}/>
    </div>
    <div>
      <button onClick={login}>Login</button>
    </div>
    </section>
    }
    {UserName==='GUEST' && <section><WelcomeGuest/></section>}
    {isLoggedIn&&UserName!=='GUEST' && 
    <section><WelcomeUser name={UserName}/></section>}

  </>
  );
}

export default App;



