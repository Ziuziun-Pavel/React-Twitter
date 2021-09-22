import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './styles/app.css';
import './styles/index.css';
import './styles/post-add-form.css';
import './styles/post-list-item.css';
import './styles/app-header.css';
import './styles/post-list.css';
import './styles/post-status-filter.css';
import './styles/search-panel.css';

const App = () => {
    return(
     <div className="app">
            <AppHeader />
        <div className="search-panel d-flex"> 
            <SearchPanel />
            <PostStatusFilter />
        </div>
        <PostList />
        <PostAddForm />
     </div>
    )
}

export default App;