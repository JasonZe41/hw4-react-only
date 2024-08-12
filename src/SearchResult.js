import React from 'react';

function SearchResult({ results, onResultClick, showFavorites }) {
  return (
    <div className="results-container">
      <h2>{showFavorites ? 'Favorite Recipes' : 'Search Results'}</h2>
      {results.map(result => (
        <div key={result.idMeal} className="search-result" onClick={() => onResultClick(result)}>
          <img src={result.strMealThumb} alt={`Photo of ${result.strMeal}`} className="result-image"/>
          <h2>{result.strMeal}</h2>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
