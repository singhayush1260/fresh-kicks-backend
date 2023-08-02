const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    CompleteAddress: {
        type: String,
        required: true,
      },
      NearestLandmark: {
        type: String,
        required: true,
      },
      City: {
        type: String,
        required: true,
      },
      State: {
        type: String,
        required: true,
      },
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;
