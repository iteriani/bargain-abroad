mongoose = require('mongoose');
timestamp = require('mongoose-times');
validate = require('mongoose-validate');

var SentenceSchema = new mongoose.Schema({
    englishSentence : String,
    translatedSentence : String,
});

SentenceSchema.plugin(timestamp, {
    created: 'created_at',
    lastUpdated: 'updated_at'
  });

 module.exports = mongoose.model('Sentence', SentenceSchema);