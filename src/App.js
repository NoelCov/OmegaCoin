import "./App.css";
import { NavBar } from "./components/navbar/navbar.component";
import { ImageBlock } from "./components/image-block/image-block.component"
import { InformationContainer } from "./components/information-container/information-container.component";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageBlock />
      <InformationContainer />
    </div>
  );
}

export default App;
