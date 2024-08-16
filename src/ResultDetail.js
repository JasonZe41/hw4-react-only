import React from 'react';
import './ResultDetail.css'; 

function ResultDetail({ result, onBookmark }) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = result[`strIngredient${i}`];
    const measure = result[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} : ${measure}`);
    }
  }

  return (
    <div className="result-detail">
      <h2>{result.strMeal}</h2>
      <img src={result.strMealThumb} alt={`Photo of ${result.strMeal}`} className="image-size"/>
      <button className="bookmark-button" onClick={() => onBookmark(result)}>
        <i className="fas fa-bookmark"></i> Save to Bookmarks
      </button>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{result.strInstructions}</p>
    </div>
  );
}

export default ResultDetail;
