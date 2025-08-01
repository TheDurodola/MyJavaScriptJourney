const ContactInfo = require('./Contact');


describe("ContactInfo", () => {
    let contact;

    beforeEach(() => {
        contact = new ContactInfo("John Doe", "1234567890");
    });


    test("should create a contact with name and phone number", () => {
        expect(contact.getName()).toBe("John Doe");
        expect(contact.getPhoneNumber()).toBe("1234567890");
    });

    test("test that contact name cant be empty", () => {
        expect(() => {
            new ContactInfo("", "1234567890");
        }).toThrow("Name cannot be empty");
    })

    test("test that contact phone number cant be empty", () => {
        expect(() => {
            new ContactInfo("John Doe", "");
        }).toThrow("Phone number cannot be empty");
    });

    test("should update the contact's name", () => {
        contact.updateName("Jane Doe");
        expect(contact.getName()).toBe("Jane Doe");
    });

    test("should update the contact's phone number", () => {
        contact.updatePhoneNumber("0987654321");
        expect(contact.getPhoneNumber()).toBe("0987654321");
    });

    test("whitespace at the first index and the last index of the name should be trimmed", () => {
        const contactWithWhitespace = new ContactInfo("  John Doe  ", "1234567890");
        expect(contactWithWhitespace.getName()).toBe("John Doe");
    });

   

});