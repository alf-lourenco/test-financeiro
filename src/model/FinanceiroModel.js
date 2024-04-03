const { Model } = require('mongoose');

const depesa = new Model.schema({
  nomeItem: {
    type: String,
    required: true,
  },
});
