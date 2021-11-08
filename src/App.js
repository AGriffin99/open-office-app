import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
import Search from './components/Search/Search';
function App() {
  // const ListLoading = withListLoading(List);
  const SearchLoading = withListLoading(Search);

  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:8080/openofficeapi/findAll`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Open Office</h1>
      </div>
      <div className='repo-container'>
        <SearchLoading isLoading={appState.loading} repos={appState.repos}/>
        {/* <ListLoading isLoading={appState.loading} repos={appState.repos} /> */}
      </div>
    </div>
  );
}
export default App;
