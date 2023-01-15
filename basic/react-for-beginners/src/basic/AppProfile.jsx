import './App.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = e=>
    console.log('클릭')
  return (
    <>
    <button onClick={handleClick}>버튼</button>
    <Avartar 
      image='https://images.unsplash.com/photo-1672776895757-3b9da2e3b4ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
      isNew={true}
    />
    <Profile 
      image='https://images.unsplash.com/photo-1672776895757-3b9da2e3b4ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
      name='James Kim'
      title='frontend'
      isNew={true}
    />
    <Profile
      image='https://images.unsplash.com/photo-1672776895757-3b9da2e3b4ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
      name='anna Young'
      title='frontend'
    />
    <Profile
      image='https://images.unsplash.com/photo-1672776895757-3b9da2e3b4ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
      name='Bob Yu'
      title='frontend'
    />
    </>
  );
}

export default AppProfile;
