import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ length, filter, handleChange }) => {
  return (
    <>
      {length > 1 && (
        <label>
          Find contacts by name
          <br />
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
            placeholder="Enter name..."
          />
        </label>
      )}
    </>
  );
};

Filter.propTypes = {
  length: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
