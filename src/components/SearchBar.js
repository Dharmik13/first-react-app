import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const handleSearch = () => {
    // Perform search operation using the searchQuery state
    console.log('Searching for:', searchQuery);
  };

  return (
    <div>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleInputChange}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      <Button variant="contained" type="submit">
                Add
      </Button>
    </div>
  );
}

export default SearchBar
