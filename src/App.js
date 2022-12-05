import React from "react";
import "./styles.css";
import MultiPlayer from "./MultiPlayer";

function App() {
  return (
    <div className="App">
      <MultiPlayer
        urls={[
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        ]}
      />
    </div>
  );
}

export default App;
