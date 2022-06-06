const Helper = require('@codeceptjs/helper');
const assert = require('assert');

class CustomAssertions extends Helper {

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


}

module.exports = CustomAssertions;
