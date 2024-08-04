import React from 'react'

function App() {
  return (
    <>
      <header>
        <nav>
          <h1>RecipeFinder</h1>
          <img src="bookmark.svg" alt="Bookmark icon"/>
        </nav>
        <form>
          <input autoFocus type="search" name="keyword" placeholder="Search by recipe name..." className="p-2 rounded-pill w-100 my-4" />
        </form>
      </header>

      <main>

      </main>
    </>
    )
}

function SearchResult(props) {
  // HINT: You can use this old-style HTML template to help you 
  // render a single search result.

  // <template id="searchResultTemplate">
  //   <div class="search-result">
  //     <img src="example.jpg" alt="Photo of prepared food">
  //     <h2>Recipe Title Goes Here</h2>
  //     <h2><a href="">View Details...</a></h2>
  //   </div>
  // </template>
}

export default App;
