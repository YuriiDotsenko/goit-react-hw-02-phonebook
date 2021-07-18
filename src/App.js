import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";

class App extends Component {
  state = {
    contacts: [
      { name: "text", id: 1, number: "0667878787" },
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  handleFilter = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  addContact = (name, number) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert("Attempt to create existing contact!");
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { name, id: uuidv4(), number }],
    }));
  };

  removeContact = (idToRemove) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idToRemove),
    }));
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Form addContact={this.addContact} />
          <Contacts
            filterValue={this.state.filter}
            handleFilter={this.handleFilter}
            title="Contacts"
            filterFunction={this.filterContacts}
            removeContact={this.removeContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
