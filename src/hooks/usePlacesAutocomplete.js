import { useState, useEffect } from 'react';

export function usePlacesAutocomplete(text = '', debounceTimeout = 400) {
  const [predictions, setPredictions] = useState([]);

  // Async google places autocomplete function
  const googleAutocomplete = async (text) =>
    new Promise((resolve, reject) => {
      if (!text) {
        return reject('Need valid text input');
      }

      if (typeof window === 'undefined') {
        return reject('Need valid window object');
      }

      try {
        new window.google.maps.places.AutocompleteService().getPlacePredictions(
          { input: text, componentRestrictions: { country: 'id' } },
          resolve
        );
      } catch (e) {
        reject(e);
      }
    });

  useEffect(() => {
    const handleDebounce = setTimeout(async () => {
      try {
        if (!text) {
          return;
        }

        const nextPredictions = await googleAutocomplete(text);
        setPredictions(nextPredictions);
      } catch (e) {
        console.error(e);
      }
    }, debounceTimeout);

    return () => {
      clearTimeout(handleDebounce);
    };
  }, [text, debounceTimeout]);

  return predictions;
}
