import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [aVar, setAVar] = useState<string | null>(null);

  useEffect(() => {
    if (aVar) {
      console.log(aVar);
    }
    setAVar('aca');
  }, []);

  return <div className="App">App</div>;
}

export default App;
