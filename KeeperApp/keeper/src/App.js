import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';

function App() {
  return (
    <>
      <Header/>
      <Note
        title= "This is the note title"
        content = 'This is the note content'
      />
      <Footer/>
    </>
  );
}

export default App;
