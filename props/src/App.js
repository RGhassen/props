import './App.css';
import Profile from './profile/profile';

function App() {
 var fullName = 'Raggad Ghassen'
  var bio = 'Im a Full Stuck Web Developer i use MERN technologies '
  var profession = 'student at Go my code'
  const handleName =(a)=>{
      alert(`hello ${a}`)
  }
  return (
    <div className='main'>
      <Profile fullName={fullName} bio = {bio} profession ={profession} handleName={handleName}>  
        <img src='/image2.jpg' alt='error at image 2'/>
      </Profile>
    </div>
  );
}
export default App;
