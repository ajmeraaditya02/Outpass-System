import logo from './logo.svg';
import './App.css';
import SubmitButton from './Components/Buttons/SubmitButton';


function App() {
  const handleButtonClick = (event) => {
    console.log('Button clicked!');
  };
  return (
    <>
      <h1 className='bg-green-400 text-yellow '>
        Tailwind Test
      </h1>
    </>
  );
}

export default App;
