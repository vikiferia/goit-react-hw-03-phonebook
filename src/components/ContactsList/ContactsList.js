import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem/ContactsItem';

const ContactsList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem
        key={id}
        name={name}
        number={number}
        onDelete={() => onDelete(id)}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.array,
  ]),
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
