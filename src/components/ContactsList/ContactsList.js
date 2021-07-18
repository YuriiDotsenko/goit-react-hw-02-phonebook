import React from 'react';
import './ContactsList.css';

const ContactsList = ({ contacts, removeContact }) => (
  <ul className="List">
    {contacts.map(({ name, id, number }) => (
      <li key={id} className="Contact">
        <p className="Text">
          <span className="Name">{name}</span>
          <span className="Phone">{number}</span>
        </p>
        <button
          className="Remove__btn"
          type="button"
          onClick={() => removeContact(id)}
        >
          Remove contact
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
