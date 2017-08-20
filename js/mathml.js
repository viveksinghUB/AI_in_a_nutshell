$(document).ready(function(){
	setupMathjaxIfNeeded();	
});

 function isMathMLNativelySupported(){
      var hasMathML = false;
      if (document.createElement) {
      var div = document.createElement("div");
      div.style.position = "absolute"; div.style.top = div.style.left = 0;
      div.style.visibility = "hidden"; div.style.width = div.style.height = "auto";
      div.style.fontFamily = "serif"; div.style.lineheight = "normal";
      div.innerHTML = "<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>";
      $("body").append(div);
      hasMathML = div.offsetHeight > div.offsetWidth;
    }
      return hasMathML;
  }
  
  function setupMathjaxIfNeeded(){
  	if( isMathMLNativelySupported() ) 
		return true;
    var scriptMathJax = document.createElement("script");
    scriptMathJax.type = "text/javascript";
    scriptMathJax.src  = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
    $("head").append(scriptMathJax);
    return false;
  }
