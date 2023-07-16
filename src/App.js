import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import AddPost from "./components/pages/AddPost";
import EditPost from "./components/pages/EditPost";
import About from "./components/pages/About";
import NoMatch from "./components/pages/NoMatch";
import Header from "./components/views/Header/Header";
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';


const App = () => {
  
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPost/>}/>
          <Route path="/post/edit/:id" element={<EditPost/>}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Container>
    </main>    
  );  
};

export default App;