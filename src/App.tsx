import { Card } from "./components/Card/Card";

import "./App.css";

const images = new Array(100)
  .fill("")
  .map((_, index) => `https://picsum.photos/id/${index}/200`);

function App() {
  return (
    <div className="App">
      <div className="container">
        {images.map((image, index) => (
          <Card key={index} imageUrl={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
