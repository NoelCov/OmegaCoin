import "./App.css";
import { NavBar } from "./components/navbar/navbar.component";
import { ImageBlock } from "./components/image-block/image-block.component"
import { InformationContainer } from "./components/information-container/information-container.component";
import { Price } from "./components/price/price.component";
import { Contribute } from "./components/contribute/contribute.component"


function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageBlock />
      <InformationContainer />
      <Price />
      <Contribute />
    </div>
  );
}

export default App;
