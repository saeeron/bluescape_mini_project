const { I } = inject();

module.exports = {

    fields: {
        name: 'Name',
        email: 'Email',
        website : 'Website',
        date : 'Date'
    },
    submitButton: {
        css: '.contact-submit .pushbutton-wide'
    },

    // methods
    start(){
      I.amOnPage("contact/");
      I.resizeWindow("maximize");
    },

    fillForm(input_data) {
        if (input_data.hasOwnProperty("name")) {
            I.clearField(this.fields.name);
            I.fillField(this.fields.name, input_data.name);
        }
        if (input_data.hasOwnProperty("email")) {
            I.clearField(this.fields.email);
            I.fillField(this.fields.email, input_data.email);
        }
        if (input_data.hasOwnProperty("URL")) {
            I.clearField(this.fields.website);
            I.fillField(this.fields.website, input_data.URL);
        }
        if (input_data.hasOwnProperty("date")) {
            I.clearField(this.fields.date);
            I.fillField(this.fields.date, input_data.date);
        }
    },
    sendForm() {
        I.waitForClickable(this.submitButton);
        I.click(this.submitButton);
    },
    removeName(){
        I.clearField(this.fields.name);
    },
    removeEmail(){
        I.clearField(this.fields.email);
    }


}
