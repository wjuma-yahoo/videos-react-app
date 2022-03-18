import React, { useState } from 'react';

export const SearchBar = ({ onCatchFormSubmitted }) => {

  const [term, setTerm] = useState('');

  const handleOnFormSubmit = e => {
    e.preventDefault();
    onCatchFormSubmitted(term);
  }

  return (
    <div className="ui segment">
      <form onSubmit={handleOnFormSubmit} className='ui form'>
        <div className='field'>
          <label className=''>Video Search</label>
          <input 
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type="text"/>
        </div>
      </form>
    </div>
  );

}
