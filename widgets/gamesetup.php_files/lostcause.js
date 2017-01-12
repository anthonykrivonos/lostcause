// Anthony Krivonos 2015
// LostCause Website Javascript

//Screen Variables
var LOAD = 0, HELP = 1, DONATE = 2, INFO = 3;
var OFFLINE = 0, ONLINE = 1;
var L = 0, R = 1;
var quoteCount;
var atk = 5, def = 5, speed = 5, res = 5, ins = 5;

function initialize (z)
{
      tempBG = document.getElementById("indexbg");
      loadScreen = document.getElementById("loadscreen");
      helpScreen = document.getElementById("helpscreen");
      donateScreen = document.getElementById("donatescreen");
      infoScreen = document.getElementById("infoscreen");
      Quote = document.getElementById("quote");
      if (z == OFFLINE)
      {
            setBG(OFFLINE);
            return;
      }
      setBG();
      if (z == LOAD)
      {
            setQuote();
      }
}

function display ()
{
      document.getElementById("atkcount").innerHTML = atk;
      document.getElementById("defcount").innerHTML = def;
      document.getElementById("speedcount").innerHTML = speed;
      document.getElementById("rescount").innerHTML = res;
      document.getElementById("inscount").innerHTML = ins;
}

function switchScreen(screen)
{
      if (screen == LOAD)
      {
            loadScreen.style.display = "inline-block";
            loadScreen.style.opacity = "0";
            loadScreen.setAttribute("style", "opacity: 1; transition: all 2s;");
            helpScreen.style.display = "none";
            donateScreen.style.display = "none";
            infoScreen.style.display = "none";
      }
      if (screen == HELP)
      {
            helpScreen.style.display = "inline-block";
            loadScreen.style.display = "none";
            donateScreen.style.display = "none";
            infoScreen.style.display = "none";
            setQuote();
      }
      if (screen == DONATE)
      {
            donateScreen.style.display = "inline-block";
            loadScreen.style.display = "none";
            helpScreen.style.display = "none";
            infoScreen.style.display = "none";
      }
      if (screen == INFO)
      {
            infoScreen.style.display = "inline-block";
            loadScreen.style.display = "none";
            helpScreen.style.display = "none";
            donateScreen.style.display = "none";
      }
}

function setQuote ()
{
      if (quoteCount != null)
      {
            var tempCount = quoteCount;
      }
      quoteCount = Math.floor((Math.random() * 10) + 1);
      if (quoteCount != tempCount)
      {
            if (quoteCount == 1)
            {
                  Quote.innerHTML = "Don't let your dreams be dreams"
            }
            if (quoteCount == 2)
            {
                  Quote.innerHTML = "You are what you eat"
            }
            if (quoteCount == 3)
            {
                  Quote.innerHTML = "Throwback to my man Sparticus"
            }
            if (quoteCount == 4)
            {
                  Quote.innerHTML = "Don't eat that raw"
            }
            if (quoteCount == 5)
            {
                  Quote.innerHTML = "I can't get back down"
            }
            if (quoteCount == 6)
            {
                  Quote.innerHTML = "I left my iPod at home"
            }
            if (quoteCount == 7)
            {
                  Quote.innerHTML = "Jim looks tasty"
            }
            if (quoteCount == 8)
            {
                  Quote.innerHTML = "I got spiders in my docs"
            }
            if (quoteCount == 9)
            {
                  Quote.innerHTML = "Don't ever take fire for granted"
            }
            if (quoteCount == 10)
            {
                  Quote.innerHTML = "Trust no one  Not even yourself"
            }
      }
      else
      {
            setQuote();
      }
}

function setBG (act)
{
      var img = Math.floor((Math.random() * 5) + 1);
      var imgsrc = "images/indexbg/" + img + ".jpg";
      tempBG.src = imgsrc;
      bg = imgsrc;
      if (act == OFFLINE)
      {
            if (bg == '')
            {
                  var img = Math.floor((Math.random() * 5) + 1);
                  var imgsrc = "images/indexbg/" + img + ".jpg";
                  tempBG.src = imgsrc;
                  bg = imgsrc;
                  return;
            }
            tempBG.src = bg;
      }
      switchScreen(LOAD);
}

function setUpGame (g)
{
      /*var form = document.getElementById("gameform");
      var select = document.getElementById("gameselect");
      select.value = g;
      form.submit();*/
      if (g == OFFLINE)
      {
            var form = document.getElementById("bgform");
            var select = document.getElementById("bgselect");
            select.value = bg;
            form.submit();
      }
      if (g == ONLINE)
      {
            document.getElementById("online").style.display = "inline-block";
      }
}

//FIX GOING OVER THE CLICK LIMIT
function drag (direction, sl, attribute)
{
      var slider = document.getElementById("slider" + sl);
      margin = parseInt(slider.style.marginLeft);
      if (direction == L)
      {
            if (margin <= 0)
            {
                  return;
            }
            margin = margin - 21.5;
            if (attribute == 'atk')
            {
                  atk = atk - 1;
            }
            if (attribute == 'def')
            {
                  def = def - 1;
            }
            if (attribute == 'speed')
            {
                  speed = speed - 1;
            }
            if (attribute == 'res')
            {
                  res = res - 1;
            }
            if (attribute == 'ins')
            {
                  ins = ins - 1;
            }
      }
      if (direction == R)
      {
            if (margin >= 214)
            {
                  return;
            }
            margin = margin + 21.5;
            if (attribute == 'atk')
            {
                  atk = atk + 1;
            }
            if (attribute == 'def')
            {
                  def = def + 1;
            }
            if (attribute == 'speed')
            {
                  speed = speed + 1;
            }
            if (attribute == 'res')
            {
                  res = res + 1;
            }
            if (attribute == 'ins')
            {
                  ins = ins + 1;
            }
      }
      slider.style.marginLeft = margin + "px";
      display();
}

function setClass(val)
{
      var tempElem = document.getElementById(val);
      document.getElementById('pacifist').src = "images/woborder/pacifist.png";
      document.getElementById('gatherer').src = "images/woborder/gatherer.png";
      document.getElementById('medic').src = "images/woborder/medic.png";
      document.getElementById('craftsman').src = "images/woborder/craftsman.png";
      document.getElementById('hacker').src = "images/woborder/hacker.png";
      document.getElementById('hunter').src = "images/woborder/hunter.png";
      document.getElementById('warrior').src = "images/woborder/warrior.png";
      tempElem.src = "images/wborder/" + val + ".png";
}
