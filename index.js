const { program } = require("commander");
const {
    listContacts,
    getContactById,
    removeContact,
    addContact,
} = require("./contacts");

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

const argv = program.opts();

program.parse(process.argv);

const invokeAction = async ({ action, id, name, email, phone }) => {
    let result;
    switch (action) {
        case "list":
            result = await listContacts();
            return console.table(result);
        case "get":
            result = await getContactById(id);
            return console.table(result);
        case "remove":
            result = await removeContact(id);
            return console.table(result);
        case "add":
            result = await addContact(name, email, phone);
            return console.table(result);
        default:
            console.warn("\x1B[31m Unknown action type!");
            break;
    }
};

invokeAction(argv);
