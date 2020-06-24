// --------------------------------------------------------------------------------------------------
//
// Movidesk API no Google APP Script 
//
// --------------------------------------------------------------------------------------------------

// custom menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom iTunes Menu')
      .addItem('Get Artist Data','displayArtistData')
      .addItem('Get Artist Data','displayArtistData')
      .addToUi();
}

function ChamaAPI() {
  
  // Como toda API, o Movidesk API tem uma KEY de acesso, que eles chamam de tokenAPI.
  // Como o próprio nome diz, essa é a chave que permite termos acesso à API.
  
  var token = "6b388bbb-f56d-4044-a75e-c2342ca76c6a"; //Chave exemplo para teste
  
  // Chama a API Movidesk 
  var response = UrlFetchApp.fetch("https://api.movidesk.com/public/v1/tickets?token=" + token + "&$select=id,type,origin,status");
  
  // Analisa resposta JSON
  var conteudo = response.getContentText();
  
  Logger.log(conteudo);
  
  var obj = JSON.parse(conteudo, function (key, value) {
  if (key == "status") {
    Logger.log("O status é = " + value);
  } else if (key == "origin")
  {
   Logger.log("A origin é = " + value);
  }
}); 
  
}
