// Kirjeldame aadressiraamatut
describe('Address Book', function() {
    // Aadressiraamat peaks oskama lisada uut kontakti
    it('should be able to add a contact', function() {
        // Loome uued objektid
        var addressBook = new AddressBook(),
            thisContact = new Contact();

        // Lisame aadressiraamatusse uue kontakti
        addressBook.addContact(thisContact);

        // Kontrollime, et esimene kontakt mille me aadressiraamatust saame on see sama
        // mille me lisasime
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
});