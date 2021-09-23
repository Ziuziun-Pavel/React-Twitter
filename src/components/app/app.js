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

    const data = [
        123,
        {label: "Going to learn React", important: true, id: 'jmhgh'},
        {label: "This is so good", important: false, id: 'ghmk'},
        {label: "I need a cup of coffee" , important: false, id: 'qwzx'},
        {label: "Somebody hear me?", important: false, id: 'opil'},
        'fghhjmg',
        1234,
        {},
        {},
        false,
        {label: "", important: false, id: 'opil'},
        {label: " ", important: true, id: 'uuip'},
        ["fgh",12]
    ];
  
    return(
     <div className="app">
            <AppHeader />
        <div className="search-panel d-flex"> 
            <SearchPanel />
            <PostStatusFilter />
        </div>
        <PostList posts={data} />
        <PostAddForm />
     </div>
    )
}

export default App;