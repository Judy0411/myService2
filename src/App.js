import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

let images = [
   {
      src:
          "https://picsum.photos/id/237/700/650",
      title:"",
      description:"images"
   },
   {
      src:
          "https://picsum.photos/id/234/700/650",
      title:"",
      description:"images"
   },
   {
      src: "https://picsum.photos/id/236/700/650",
      title:"",
      description:"images"
   }
];

function App() {

  return (
      <>
         <Navbar bg="light" variant="light" fixed="top">
            <Container>
               <Navbar.Brand href="#home">Yeonsoo</Navbar.Brand>
               <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Images</Nav.Link>
                  <Nav.Link href="#pricing">etc</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
         <div className="App">
            <h1>Hello! I'm Yeonsoo Seo</h1>
            <p>Look at the Beautiful Pictures.<br/> Click Images ☺️</p>
            <Lightbox images={images} />
         </div>

      </>

  );
}

export default App;
