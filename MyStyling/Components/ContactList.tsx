import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  // Create an array to store the contacts
  const contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555' },
    // Add more contacts as needed with unique IDs
  ];

  return (
    <View>
      <Text style={styles.HeadingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map((contact) => (
          <View key={contact.id} style={styles.usercard}>
            <Text>Id: {contact.id}</Text>
            <Text>Name: {contact.name}</Text>
            <Text>Email: {contact.email}</Text>
            <Text>Phone: {contact.phone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HeadingText: {
    fontSize: 24, // Example font size
    fontWeight: 'bold', // Example font weight
    textAlign: 'center', // Center align the text
  },
  container: {
    padding: 10, // Example padding
  },
  usercard: {
    margin: 10, // Example margin
    padding: 10, // Example padding
    backgroundColor: '#2CA8ED',
    borderRadius: 10, // Example border radius
  },
});
