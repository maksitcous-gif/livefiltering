import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data';

function App() {
  // ✅ use data properly (editable copy)
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  //  DELETE (optional but included since you want full app)
  const handleDelete = (id) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };

  return (
    <Container className="mt-4">
      <h1>Live Filtering</h1>

      {/* SEARCH */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search contacts..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      {/* TABLE */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts
            .filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                  item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                  item.email.toLowerCase().includes(search.toLowerCase()) ||
                  item.phone.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>

                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}>Delete</button>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;