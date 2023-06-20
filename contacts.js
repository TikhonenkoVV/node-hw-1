const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
    // ...твій код. Повертає масив контактів.
};

const getContactById = async (contactId) => {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
};

const removeContact = async (contactId) => {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
};

const addContact = async (name, email, phone) => {
    // ...твій код. Повертає об'єкт доданого контакту.
};

module.exports = { listContacts, getContactById, removeContact, addContact };
