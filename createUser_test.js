
Feature('Contact Us Page Functionality');

Before(async ({I, IonContactPage}) => {
    await I.say("Given I am on Contact Us page");
    IonContactPage.start();
    I.see("required");
})

Scenario('Verify the happy path, where the form is accepted',  async ({ I , IonContactPage}) => {


    let fakeName = await I.createFakeName();
    let fakeEmail = await I.createFakeEmail();
    let fakeWebsite = await I.createFakeWebsite();
    let fakeDate = await I.createFakeDate();
    let all_data = {
        name : fakeName,
        email : fakeEmail,
        URL : fakeWebsite,
        date : fakeDate
    };
    await I.say("When I fill/send the form with valid data");
    IonContactPage.fillForm(all_data);
    IonContactPage.sendForm();

    await I.say("Then I see that I can proceed");

    I.waitForText("Message Sent",2);
    I.seeInCurrentUrl("-sent");
    I.see(fakeName);
    I.see(fakeEmail);
    I.see(fakeWebsite);
    I.see(fakeDate);

});

Scenario('Verify that the field "Website" is required to be a valid URL',  async ({ I , IonContactPage}) => {



    let fakeName = await I.createFakeName();
    let fakeEmail = await I.createFakeEmail();
    let fakeDefectiveWebsite = await I.createUnacceptableURL();
    let fakeDate = await I.createFakeDate();
    let all_data = {
        name : fakeName,
        email : fakeEmail,
        URL : fakeDefectiveWebsite,
        date : fakeDate
    };

    await I.say("When I fill the form with invalid URL and valid rest");

    IonContactPage.fillForm(all_data);
    IonContactPage.sendForm();

    await I.say("Then I see that the form is not accepted");
    I.wait(2);
    I.dontSeeInCurrentUrl('-sent');
    I.dontSee('Message Sent');

});


Scenario('Verify that name and url are required to send form',  async ({ I , IonContactPage}) => {


    let fakeName = await I.createFakeName();
    let fakeEmail = await I.createFakeEmail();
    let fakeDefectiveWebsite = await I.createFakeWebsite();
    let fakeDate = await I.createFakeDate();
    let all_data = {
        name : fakeName,
        email : fakeEmail,
        URL : fakeDefectiveWebsite,
        date : fakeDate
    };

    await I.say("When I fill the form with valid date");

    IonContactPage.fillForm(all_data);

    await I.say("And I exclude Name and send form");


    IonContactPage.removeName();
    IonContactPage.sendForm();

    await I.say("Then I see that the form is not accepted");

    I.wait(2);
    I.dontSeeInCurrentUrl("-sent");
    I.dontSee('Message Sent');

    await I.say("When I fill the form with valid date");

    IonContactPage.fillForm(all_data);

    await I.say("And I exclude Email and send form");

    IonContactPage.removeEmail();
    IonContactPage.sendForm();

    await I.say("Then I see that the form is not accepted");

    I.wait(2);
    I.dontSeeInCurrentUrl('-sent');
    I.dontSee('Message Sent');


});

