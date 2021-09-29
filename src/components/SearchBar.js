import React, {useState} from 'react';

const SearchBar = ( {onSearchTermSubmit} ) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearchTermSubmit(term);
    };

    return (
        
        <div className="search-bar ui segment">
         <form onSubmit={onFormSubmit} className="ui form">
             <div className="field">
                 <label>Video Search</label>
                 <input 
                    type="text" 
                    value={term}
                    onChange={onInputChange}
                 />
             </div>
         </form>
        </div>
     
     );
};

export default SearchBar;