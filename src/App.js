import { useState } from 'react';
import { usePlacesAutocomplete } from './hooks/usePlacesAutocomplete';

import './App.css';

function App() {
  const [selectedPrediction, setSelectedPrediction] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const predictions = usePlacesAutocomplete(searchValue);

  const handlePredictionSelection = (e, prediction) => {
    e.preventDefault();
    setSelectedPrediction(prediction);
  };

  return (
    <form>
      <input name="predictionSearch" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <ul>
        {predictions?.map((prediction) => (
          <li key={prediction?.place_id}>
            <button
              onClick={(e) => handlePredictionSelection(e, prediction)}
              onKeyDown={(e) => handlePredictionSelection(e, prediction)}
            >
              {prediction?.structured_formatting?.main_text || 'Not found'}
            </button>
          </li>
        ))}
      </ul>
      <h3>You searched for: {searchValue}</h3>
      <h3>You selected: {selectedPrediction?.structured_formatting?.main_text || 'None'}</h3>
    </form>
  );
}

export default App;
