import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactsItem = ({ name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <p className={styles.itemName}>
        {name}: {number}
      </p>
      <button type="button" onClick={onDelete} className={styles.itemBtn}>
        delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsItem;
