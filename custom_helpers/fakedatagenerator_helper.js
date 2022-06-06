const Helper = require('@codeceptjs/helper');
const myFunctions = require("../created_modules/fake_factory");

class FakeDataGenerator extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used

  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  createFakeName() {
    return myFunctions.createName();
  }
  createFakeEmail() {
    return myFunctions.createEmail();
  }
  createFakeWebsite() {
    return myFunctions.createURL();
  }
  createFakeDate(){
    return myFunctions.createDate();

  }
  createUnacceptableURL(){
    return myFunctions.createUnacceptableURL();
  }

}

module.exports = FakeDataGenerator;
