import React, { useState } from 'react';
import SearchResult from './SearchResult';
import ResultDetail from './ResultDetail';

function SearchForm() {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (keyword.trim() === '') {
      alert('Please enter a keyword');
      return;
    }

    setSelectedResult(null);
    setShowFavorites(false);

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(keyword)}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults(data.meals || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleResultClick = result => {
    setSelectedResult(result);
  };

  const handleBookmark = result => {
    if (!favorites.some(favorite => favorite.idMeal === result.idMeal)) {
      setFavorites(prev => [...prev, result]);
    }
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
    setSelectedResult(null);
  };

  return (
    <>
      <header>
        <nav>
          <h1>RecipeFinder</h1>
          <img 
            src="bookmark.svg" 
            alt="Bookmark icon" 
            onClick={handleShowFavorites} 
            style={{ cursor: 'pointer' }}
          />
        </nav>
        <form onSubmit={handleSubmit}>
          <input 
            autoFocus 
            type="search" 
            name="keyword" 
            placeholder="Search by recipe name..." 
            className="search-input"  
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            onKeyUp={handleKeyPress}
          />
        </form>
      </header>

      <main>
        {selectedResult ? (
          <ResultDetail result={selectedResult} onBookmark={handleBookmark} />
        ) : (
          <SearchResult 
            results={showFavorites ? favorites : searchResults} 
            onResultClick={handleResultClick} 
            showFavorites={showFavorites} 
          />
        )}
      </main>
    </>
  );
}

export default SearchForm;
