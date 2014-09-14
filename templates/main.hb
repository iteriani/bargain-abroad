<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/1.4.0/annyang.min.js"></script>
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min.js"></script>
<script src="js/md5.js"></script>
<script language="JavaScript" type="text/javascript" src="http://vhss.oddcast.com/vocalware_embed_functions.php?acc=4672371&js=1"></script><script language="JavaScript" type="text/javascript">AC_Vocalware_Embed(4672371,300, 400,'',1,1, 2381740, 0,1,0,'3c39487d45375a5129600f55e7e0cb90',9);</script>
<script>
function WordController(){
  var count = 1,
  var viewModel = {
    word : ko.observable(""),
    amount : ko.observable(""),
    sentences : ko.observableArray([])
  };

  viewModel.send = function(){
    count = 1;
      var product = viewModel.word(), amount = viewModel.amount();
      $.get('/moneyInfo?product='+product + "&amount=" + amount, function(data){
          viewModel.sentences(data);
      });
  };

  viewModel.sayWord = function(obj){
    if(count++> 2){
          sayText(obj, 2,2,1);  
    }
  }


  this.init = function(){
    if (annyang) {
      annyang.addCommands({':item': function(item) {
        viewModel.word(item);
      }});
      annyang.start();
    }
  };
  ko.applyBindings(viewModel, document.getElementById("ok"));
}
</script>
<div id="ok">
  <input type="text" data-bind="value : word" id="word"/>
  <input type="text" data-bind="value : amount" id="amount"/>
  <button id="send" data-bind="click: send">SEND</button>
  <table>
    <thead>
      <tr>
        <td>Original</td>
        <td>Translated</td>
        <td>Speak</td>
      </tr>
    </thead>
    <tbody data-bind="foreach:sentences"> 
      <tr>
        <td data-bind="text : englishSentence"></td>
        <td data-bind="text : translatedSentence"></td>
        <td><button data-bind="click : $parent.sayWord(translatedSentence)">SAY WORD</button></td>
      </tr>
   </tbody>
  </table>
</div>