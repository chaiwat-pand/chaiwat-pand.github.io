import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import api from './api/search_api';
import Header from './Header';
import SearchBar from './SearchBar';
import Home from './Home';


function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const fecthPosts = async () => {
      try {
        const response = await api.get('/trips');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          //Undefinded response
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fecthPosts();
  }, [])

  useEffect(() => {
    // const post_tags = [posts.tags];
    const filteredResults = posts.filter((post) =>
      ((post.title).toLowerCase()).includes(search.toLowerCase())
      || ((post.description).toLowerCase()).includes(search.toLowerCase())
    );

    // const filteredResults2 = posts.map((post) =>

    // (post.tags.filter((tag) => tag.toLowerCase() === search.toLowerCase())
    // ));

    setSearchResults(filteredResults);
  }, [posts, search])


  return (
    <div className="App">
      <Header title="Where we go?" />
      <SearchBar search={search} setSearch={setSearch} />

      <Switch>
        <Route exact path="/" >
          <Home posts={searchResults} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
