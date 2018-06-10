module.exports.generateWord = function(strLength){
    var posibilities = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn,;:!ù*?./§%µ1234567890 ";
    var strOutpout = "";
   for(var i = 0; i < strLength; i++){
       strOutpout+= posibilities.charAt(Math.floor(Math.random() * posibilities.length));
    }

    return strOutpout;
};