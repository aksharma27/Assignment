import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './Notes';


// console.log(notes);
function createNotes(noteItem){
  return 
  <Note 
    title = {noteItem.title}
    content = {noteItem.content}
  />
}

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
