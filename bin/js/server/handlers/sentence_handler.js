const Sentence = require('../models/sentence');

module.exports = {
	findAll : function(req,res){
		var itemName = req.query.product, number=req.query.amount, units="pesos";
		Sentence.find({}, function(err,sentences){
			var params = { 
     			 text: itemName + " is " + number ,
      		     from: 'en' ,
      		     to: 'es'
    		};
    	  client.translate(params, function(err, data) {
          	var set = data.split("es"), product=set[0], trUnit=set[1];
            sentences.forEach(function(set)
            	{
            		set.translatedSentence = set.translatedSentence
            							.replace("@product", product)
            							.replace("@money", trUnit)
            							.replace("@unit", units);
            		set.englishSentence = set.englishSentence
            							.replace("@product", itemName)
            							.replace("@money", number)
            							.replace("@unit", units);
          		}
          	);
    	  	res.json(sentences);
    		});
		});
	}
};