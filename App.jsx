import React, { useState } from 'react';
import content from './content.json'; // Import the JSON file
import './styles.css'; // Import your CSS file for global styles

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        Toggle Content
      </button>
      <div
        className="transition-box"
        style={show ? content.fadeIn : content.fadeOut}
      >
        {content.content} {/* Display content from JSON */}
      </div>
    </div>
  );
};

export default App;
