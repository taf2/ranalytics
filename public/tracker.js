function Analytics() {};
Analytics._begin = function(write)
{
  var span = document.createElement("span");
  Analytics.src += "&dt=" + (new Date().getTime() - _start.getTime());
  var img = new Image();
  img.src = Analytics.src;
}
Analytics.track = function()
{
  var rand = Math.random();

  Analytics.src = "/ping-track?loc="+encodeURI(window.location) +
                  "&ti=" + new Date().getTime() +
                  "&st=" + _start.getTime() + 
                  "&cb=" + rand;

  if( window.addEventListener ) {
    window.addEventListener('load', Analytics._begin, false);
  }
  else if( window.attachEvent ) {
    window.attachEvent('onload', Analytics._begin);
  }
  else {
    Analytics._begin(true);
  }
}
Analytics.track();
