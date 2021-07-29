const deepl = require("./index")

deepl.translateWithCache(`salut tout le monde comment ca va ?`,"auto","en")
.then(rep=>console.log(rep))
.catch(function(e) {
  console.log(e);
});


deepl.targetLanguagesAvailable()
.then(rep=>console.log(rep))
.catch(function(e) {
  console.log(e);
});