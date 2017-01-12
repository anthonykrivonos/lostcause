// Anthony Krivonos 2015
// LostCause Website Javascript

//Screen Variables
var UNLOAD = -1, LOAD = 0, HELP = 1, DONATE = 2, INFO = 3, ADD = 4, SUB = 5;
var UP = 1, DOWN = 2;
var charDownDirect = DOWN;
var OFFLINE = 0, ONLINE = 1, GAME = 2;
var M = 0, L = 1, R = 2, S = 3, T = 4;
var quoteCount, pClass;
var atk = 5, def = 5, speed = 5, res = 5, ins = 5;
var charEdit = UNLOAD, pClass = "pacifist";
var nameListA = ["Pedro", "Chris", "Karl", "Olga", "Sergey", "Sharice", "Barry", "Kim", "Justin", "Olivia", "Anthony", "Kitty", "Joshua", "Aylin", "Zhiyi", "Naira", "Raymond", "Kelly", "Myron"];
var nameListB = ["Courtney", "Garbanzo", "Martinez", "Maxwell", "Shirley", "Julie", "Damon", "Yasmeen", "Shatique", "Earl", "Wilson", "Usman", "Dennis", "Marc", "Ethan", "Andy", "Travis", "Nelson"];
var nameListC = ["Jesse", "Melissa", "Jessica", "Sandy", "Mario", "Giovanni", "Leon", "Finbar", "Stephen", "Mo", "Jeremy"]
var nameList = nameListA.concat(nameListB).concat(nameListC);
var playerCount = 0, limit = 35;
var isRed = false;

// Lists of player objects
var players = Array();
var killed = Array();

//Game variables
var gameInterval;
var timeLimit;

//Item List
var weapons = ["dagger", "gun", "bow", "sword", "scythe", "grenade", "stick", "bat"];
var food = ["veal", "chicken", "mysterymeat", "tofu", "bread", "tomato", "banana", "sugarwater", "soup", "fish"];
var tools = ["rod", "tracker", "hammer", "trap", "tripwire"];

function initialize (z)
{
      tempBG = document.getElementById("indexbg");
      loadScreen = document.getElementById("loadscreen");
      helpScreen = document.getElementById("helpscreen");
      donateScreen = document.getElementById("donatescreen");
      infoScreen = document.getElementById("infoscreen");
      Quote = document.getElementById("quote");
      limitBox = document.getElementById("scount");
      pSet = document.getElementsByClassName("character");
      if (z == OFFLINE || z == GAME)
      {
            setBG(OFFLINE);
            if (z == GAME)
            {
                  drawScoreboard();
                  playGame();
            }
      }
      else
      {
            setBG();
            if (z == LOAD)
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
      document.getElementById("pcount").innerHTML = playerCount;
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
      var quotes =
      [
            "Don't let your dreams be dreams",
            "You are what you eat",
            "Throwback to my man Sparticus",
            "Don't eat that raw",
            "I can't get back down",
            "I left my iPod at home",
            "I left my iPod at home",
            "Jim looks tasty",
            "I got spiders in my boots",
            "Don't ever take fire for granted",
            "Trust no one  Not even yourself"
      ];
      if (quoteCount != tempCount)
            Quote.innerHTML = quotes[quoteCount];
      else
            setQuote();
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
}

function setUpGame (g)
{
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

function drag (direction, sl, attribute, st)
{
      total = atk + def + speed + res + ins;
      var slider = document.getElementById("slider" + sl);
      if (st != "Yes")
            margin = parseInt(slider.style.marginLeft);
      if (direction == M)
            margin = 0;
      if (direction == L)
      {
            if (margin <= -107.5)
                  return;
            margin = margin - 22;
            if (st != "Yes")
            {
                  if (attribute == 'atk')
                        atk = atk - 1;
                  if (attribute == 'def')
                        def = def - 1;
                  if (attribute == 'speed')
                        speed = speed - 1;
                  if (attribute == 'res')
                        res = res - 1;
                  if (attribute == 'ins')
                        ins = ins - 1;
            }
      }
      if (direction == R)
      {
            if (margin >= 107.5)
                  return;
            if (total >= limit && st != "Yes")
            {
                  isRed = true;
                  limitBox.setAttribute("style", "border-color:red; color:red;");
                  var countName = attribute + "count";
                  var attrCode;
                  if (attribute == 'atk')
                  {
                        attrCode = 0;
                  }
                  if (attribute == 'def')
                  {
                        attrCode = 1;
                  }
                  if (attribute == 'speed')
                  {
                        attrCode = 2;
                  }
                  if (attribute == 'res')
                  {
                        attrCode = 3;
                  }
                  if (attribute == 'ins')
                  {
                        attrCode = 4;
                  }
                  document.getElementById(countName).style.color = "red";
                  document.getElementsByClassName("counttag")[attrCode].style.color = "red";
                  setTimeout(function (){
                        document.getElementById(countName).setAttribute("style", "color:black;");
                        document.getElementsByClassName("counttag")[attrCode].setAttribute("style", "color:black;");
                        limitBox.setAttribute("style", "border-color:gray; color:gray;");
                  }, 2000)
                  return;
            }
            margin = margin + 22;
            if (st != "Yes")
            {
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
      }
      slider.style.marginLeft = margin + "px";
      display();
}

function setClass(val)
{
      var tempElem = document.getElementById(val);
      pClass = val;
      document.getElementById('pacifist').src = "images/woborder/pacifist.png";
      document.getElementById('gatherer').src = "images/woborder/gatherer.png";
      document.getElementById('medic').src = "images/woborder/medic.png";
      document.getElementById('craftsman').src = "images/woborder/craftsman.png";
      document.getElementById('hacker').src = "images/woborder/hacker.png";
      document.getElementById('hunter').src = "images/woborder/hunter.png";
      document.getElementById('warrior').src = "images/woborder/warrior.png";
      tempElem.src = "images/wborder/" + val + ".png";
}

function dropDown()
{
      var charSelector = document.getElementById('charselector');
      var downArrow = document.getElementById('downarrow');
      if (charDownDirect == DOWN)
      {
            //charSelector.style.display = "inline-block";
            charSelector.style.height = "0px";
            charSelector.setAttribute("style", "transition: all 1 ease; overflow-y: hidden; max-height: 728px; transition-property: all; transition-duration: .5s; transition-timing-function: cubic-bezier(0, 1, 0.5, 1); display: inline-block;");
            downArrow.setAttribute("style", "margin-top: 711px; -webkit-filter: invert(100%); filter: invert(100%); -webkit-transform: rotate(180deg); transform: rotate(180deg);");
            charDownDirect = UP;
            return;
      }
      if (charDownDirect == UP)
      {
            //charSelector.style.display = "none";
            charSelector.setAttribute("style", "transition: all 1s ease 1s; display: none;")
            downArrow.setAttribute("style", "margin-top: -5px; -webkit-filter: invert(0%); filter: invert(0%); -webkit-transform: rotate(0deg); transform: rotate(0deg);")
            charDownDirect = DOWN;
            return;
      }
}

function setPlayer(pId)
{
      if (parseInt(document.getElementsByClassName('character').length) > 32 || parseInt(document.getElementsByClassName('character').length) < 4)
            return;
      charEdit = pId;
      charDownDirect = DOWN;
      dropDown();
      document.getElementById("charnameinput").style.borderColor = "initial";
      document.getElementById("charnameinput").value = pSet[pId].getElementsByClassName("charname")[0].innerHTML;
      var stats = pSet[pId].getElementsByClassName("charstats")[0].innerHTML;
      stats = stats.substr(1, stats.length - 2);
      stats = stats.split("][");
      document.getElementById("atkcount").innerHTML = stats[0];
      atk = parseInt(stats[0]);
      if (atk < 5)
      {
            margin = 0;
            for (i = 0; i < 5 - atk; i++)
            {
                  drag(L, 'One', 'atk', 'Yes');
            }
      }
      if (atk > 5)
      {
            margin = 0;
            for (i = 0; i < atk - 5; i++)
            {
                  drag(R, 'One', 'atk', 'Yes');
            }
      }
      if (atk == 5)
      {
            drag(M, 'One', 'atk', 'Yes');
      }
      document.getElementById("defcount").innerHTML = stats[1];
      def = parseInt(stats[1]);
      if (def < 5)
      {
            margin = 0;
            for (i = 0; i < 5 - def; i++)
            {
                  drag(L, 'Two', 'def', 'Yes');
            }
      }
      if (def > 5)
      {
            margin = 0;
            for (i = 0; i < def - 5; i++)
            {
                  drag(R, 'Two', 'def', 'Yes');
            }
      }
      if (def == 5)
      {
            drag(M, 'Two', 'def', 'Yes');
      }
      document.getElementById("speedcount").innerHTML = stats[2];
      speed = parseInt(stats[2]);
      if (speed < 5)
      {
            margin = 0;
            for (i = 0; i < 5 - speed; i++)
            {
                  drag(L, 'Three', 'speed', 'Yes');
            }
      }
      if (speed > 5)
      {
            margin = 0;
            for (i = 0; i < speed - 5; i++)
            {
                  drag(R, 'Three', 'speed', 'Yes');
            }
      }
      if (speed == 5)
      {
            drag(M, 'Three', 'speed', 'Yes');
      }
      document.getElementById("rescount").innerHTML = stats[3];
      res = parseInt(stats[3]);
      if (res < 5)
      {
            margin = 0;
            for (i = 0; i < 5 - res; i++)
            {
                  drag(L, 'Four', 'res', 'Yes');
            }
      }
      if (res > 5)
      {
            margin = 0;
            for (i = 0; i < res - 5; i++)
            {
                  drag(R, 'Four', 'res', 'Yes');
            }
      }
      if (res == 5)
      {
            drag(M, 'Four', 'res', 'Yes');
      }
      document.getElementById("inscount").innerHTML = stats[4];
      ins = parseInt(stats[4]);
      if (ins < 5)
      {
            margin = 0;
            for (i = 0; i < 5 - ins; i++)
            {
                  drag(L, 'Five', 'ins', 'Yes');
            }
      }
      if (ins > 5)
      {
            margin = 0;
            for (i = 0; i < ins - 5; i++)
            {
                  drag(R, 'Five', 'ins', 'Yes');
            }
      }
      if (ins == 5)
      {
            drag(M, 'Five', 'ins', 'Yes');
      }
      document.getElementById("playerimg").src = pSet[pId].getElementsByClassName("pfp")[0].src;
      var classz = pSet[pId].getElementsByClassName("charclass")[0].innerHTML;
      setClass(classz.toLowerCase());
      reLimit();
}

function updatePlayer ()
{
      if (charEdit == UNLOAD)
      {
            if (parseInt(document.getElementsByClassName('character').length) >= 32)
                  return;
            if (document.getElementById("charnameinput").value == "")
            {
                  document.getElementById("charnameinput").style.borderColor = "red";
                  return;
            }
            document.getElementById("charnameinput").style.borderColor = "initial";
            playerCount += 1;
            var character = document.createElement("div");
            character.setAttribute("class", "character");
            document.getElementById("charlist").appendChild(character);
            var charnameX = document.createElement("div");
            charnameX.setAttribute("class", "charname");
            charnameX.innerHTML = document.getElementById("charnameinput").value;
            var pfpX = document.createElement("img");
            pfpX.setAttribute("class", "pfp");
            pfpX.setAttribute("src", "images/testimage.png");
            var pclassX = document.createElement("img");
            pclassX.setAttribute("class", "pclass");
            pclassX.setAttribute("src", "images/wborder/" + pClass.toLowerCase() + ".png");
            var charstatsX = document.createElement("div");
            charstatsX.setAttribute("class", "charstats");
            charstatsX.innerHTML = "[" + atk + "]["+ def + "]["+ speed + "]["+ res + "]["+ ins + "]";
            var charclassX = document.createElement("div");
            charclassX.setAttribute("class", "charclass");
            charclassX.innerHTML = pClass.charAt(0).toUpperCase() + pClass.slice(1);
            character.appendChild(charnameX);
            character.appendChild(pfpX);
            character.appendChild(pclassX);
            character.appendChild(charstatsX);
            character.appendChild(charclassX);
            var idX = parseInt(document.getElementsByClassName('character').length - 1);
            character.onclick = function onclick () {setPlayer(idX);};
            setPlayer(document.getElementById("charlist").getElementsByClassName('character').length - 1);
      }
      if (document.getElementById("charnameinput").value == "")
      {
            document.getElementById("charnameinput").style.borderColor = "red";
            return;
      }
      document.getElementById("charnameinput").style.borderColor = "initial";
      pSet[charEdit].getElementsByClassName("charname")[0].innerHTML = document.getElementById("charnameinput").value;
      pSet[charEdit].getElementsByClassName("pfp")[0].src = document.getElementById("playerimg").src;
      pSet[charEdit].getElementsByClassName("pclass")[0].src = "images/wborder/" + pClass + ".png";
      pSet[charEdit].getElementsByClassName("charclass")[0].innerHTML = pClass.charAt(0).toUpperCase() + pClass.slice(1);
      pSet[charEdit].getElementsByClassName("charstats")[0].innerHTML = "[" + atk + "][" + def + "][" + speed + "][" + res + "][" + ins+ "]";
      reLimit();
}

function editCells (act)
{
      document.getElementById("charnameinput").style.borderColor = "initial";
      if (act == ADD)
      {
            if (parseInt(document.getElementsByClassName('character').length) >= 32)
                  return;
            randNCS();
            playerCount += 1;
            var character = document.createElement("div");
            character.setAttribute("class", "character");
            document.getElementById("charlist").appendChild(character);
            var charnameX = document.createElement("div");
            charnameX.setAttribute("class", "charname");
            charnameX.innerHTML =  randName;
            var pfpX = document.createElement("img");
            pfpX.setAttribute("class", "pfp");
            pfpX.setAttribute("src", "images/testimage.png");
            var pclassX = document.createElement("img");
            pclassX.setAttribute("class", "pclass");
            pclassX.setAttribute("src", "images/wborder/" + randClass + ".png");
            var charstatsX = document.createElement("div");
            charstatsX.setAttribute("class", "charstats");
            charstatsX.innerHTML = randStats;
            var charclassX = document.createElement("div");
            charclassX.setAttribute("class", "charclass");
            charclassX.innerHTML = randClass.charAt(0).toUpperCase() + randClass.slice(1);
            character.appendChild(charnameX);
            character.appendChild(pfpX);
            character.appendChild(pclassX);
            character.appendChild(charstatsX);
            character.appendChild(charclassX);
            var idX = parseInt(document.getElementsByClassName('character').length - 1);
            character.onclick = function onclick () {setPlayer(idX);};
            setPlayer(document.getElementById("charlist").getElementsByClassName('character').length - 1);
      }
      if (act == SUB)
      {
            if (parseInt(document.getElementsByClassName('character').length) <= 4)
                  return;
            playerCount -= 1;
            var node = document.getElementById("charlist");
            node.removeChild(node.childNodes[node.childNodes.length - 1]);
            setPlayer(document.getElementById("charlist").getElementsByClassName('character').length - 1);
      }
      display();
      reLimit();
}

function initializePlayers ()
{
      dropDown(DOWN);
      var node = document.getElementById("charlist");
      var modules = parseInt((node.offsetWidth - 10)/125);
      for (var i = 0; i < modules; i++)
            editCells(ADD);
}

function randNCS ()
{
      var nameGen = Math.floor((Math.random() * (nameList.length - 1)) + 1);
      randName = nameList[nameGen];
      nameList.splice(nameGen, 1);
      randStats = "[" + Math.floor((Math.random() * 5) + 1) + "][" + Math.floor((Math.random() * 5) + 1) + "][" + Math.floor((Math.random() * 5) + 1) + "][" + Math.floor((Math.random() * 5) + 1) + "][" + Math.floor((Math.random() * 5) + 1) + "]";
      var classList = ["pacifist", "gatherer", "medic", "craftsman", "hacker", "hunter", "warrior"];
      var classGen = Math.floor((Math.random() * 7));
      randClass = classList[classGen];
      reLimit();
}

function clearInput (delAll)
{
      charEdit = UNLOAD;
      pClass = "pacifist";
      document.getElementById("charnameinput").value = "";
      document.getElementById("playerimg").src = "images/testimage.png";
      atk = 5;
      def = 5;
      speed = 5;
      res = 5;
      ins = 5;
      setClass(pClass);
      drag(M, 'One', 'atk', 'Yes');
      drag(M, 'Two', 'def', 'Yes');
      drag(M, 'Three', 'speed', 'Yes');
      drag(M, 'Four', 'res', 'Yes');
      drag(M, 'Five', 'ins', 'Yes');
      reLimit();
}

function reLimit ()
{
      var statList = document.getElementsByClassName("charstats");
      for (i = 0; i < statList.length; i++)
      {
            var tempStats = statList[i].innerHTML.substr(1, statList[i].innerHTML.length - 2);
            stats = tempStats.split("][");
            total = 0;
            for (z = 0; z < stats.length; z++)
            {
                  stats[z] = parseInt(stats[z]);
                  total += stats[z];
            }
            if (total > limit)
            {
                  var difference = total - limit;
                  for (z = 0; z < difference; z++)
                  {
                        var statChange = Math.floor((Math.random() * stats.length - 1));
                        stats[statChange] = parseInt(stats[statChange]) - 1;
                  }
                  statList[i].innerHTML = "[" + stats[0] + "][" + stats[1] + "][" + stats[2] + "][" + stats[3] + "][" + stats[4] + "]";
            }
      }
}

function limitChange ()
{
      limit = limit + 1;
      if (limit == 51)
      {
            limit = 35;
      }
      document.getElementById("limit").innerHTML = limit;
      clearInput();
      reLimit();
}

function setSelect (act, str)
{
      if (str == null)
            str = "";
      if (act == M)
      {
            document.getElementById("proceed").style.display= "block";
            document.getElementsByClassName("fullcover")[0].style.display= "block";
            var opa = 0;
            var tra = 0;
            document.getElementById("proceed").style.opacity= opa.toString();
            document.getElementsByClassName("fullcover")[0].style.opacity= tra.toString();
            var upIntA = setInterval(function () {
                  opa += .05;
                  document.getElementById("proceed").style.opacity= opa.toString();
            }, 20)
            var upIntB = setInterval(function () {
                  tra += .025;
                  document.getElementsByClassName("fullcover")[0].style.opacity= tra.toString();
            }, 20)
            setTimeout(function () {clearInterval(upIntA); clearInterval(upIntB);}, 400);
      }
      if (act == T)
      {
            if (document.getElementById("levelselector").value == "" && document.getElementById("levelnameinput").value == "")
            {
                  document.getElementById("levelnameinput").setAttribute("style", "border-color:red; color:red;");
                  document.getElementById("levelselector").setAttribute("style", "border-color:red; color:red;");
                  setSelect(L);
                  return;
            }
            if (document.getElementById("levelnameinput").value == "")
            {
                  document.getElementById("levelnameinput").setAttribute("style", "border-color:red; color:red;");
                  setSelect(L);
                  return;
            }
            if (document.getElementById("levelselector").value == "")
            {
                  document.getElementById("levelselector").setAttribute("style", "border-color:red; color:red;");
                  setSelect(L);
                  return;
            }
            setSelect(M);
      }
      if (act == L)
      {
            var opa = 1;
            var tra = .5;
            var downIntA = setInterval(function () {
                  opa -= .05;
                  document.getElementById("proceed").style.opacity= opa.toString();
            }, 20)
            var downIntB = setInterval(function () {
                  tra -= .025;
                  document.getElementsByClassName("fullcover")[0].style.opacity= tra.toString();
            }, 20)
            setTimeout(function () {document.getElementById("proceed").style.display="none"; document.getElementsByClassName("fullcover")[0].style.display = "none"; clearInterval(downIntA); clearInterval(downIntB);}, 400);
      }
      if (act == R)
      {
            document.getElementsByClassName("loading")[0].style.display = "inline-block";
            document.getElementById("proceed").style.height= "121px";
            document.getElementById("proYes").disabled = "true";
            document.getElementById("proYes").style.cursor = "default";
            document.getElementById("proNo").disabled = "true";
            document.getElementById("proNo").style.cursor = "default";
            setTimeout(function () {sendPlayerData();}, 2000);
      }
      if (act == S)
      {
            document.getElementsByClassName("loading")[0].style.display = "inline-block";
            document.getElementById("proceed").style.height= "121px";
            document.getElementById("proYes").disabled = "true";
            document.getElementById("proYes").style.cursor = "default";
            document.getElementById("proNo").disabled = "true";
            document.getElementById("proNo").style.cursor = "default";
            setTimeout(function () {sendLevelData(str);}, 2000);
      }
}

function sendPlayerData ()
{
      var playerList = new Array();
      for (i = 0; i < playerCount; i++)
      {
            var playerName = document.getElementsByClassName("charname")[i].innerHTML;
            var playerStats = document.getElementsByClassName("charstats")[i].innerHTML;
            var playerClass = document.getElementsByClassName("charclass")[i].innerHTML;
            var playerPfp = document.getElementsByClassName("pfp")[i].src;
            var playerClassImg = document.getElementsByClassName("pclass")[i].src;
            var playerInfo = playerName + ";" + playerStats + ";" + playerClass + ";" + playerPfp + ";" + playerClassImg;
            playerList.push(playerInfo);
      }

      var dataSender = document.createElement("form");
      dataSender.setAttribute('method',"post");
      dataSender.setAttribute('action',"levelsetup.php");
      dataSender.setAttribute('style',"display:none;");

      var playerListInput = document.createElement("input");
      playerListInput.setAttribute('type',"text");
      playerListInput.setAttribute('name',"listinput");
      playerListInput.setAttribute('value',playerList);
      playerListInput.setAttribute('style',"display:none;");

      var playerCountInput = document.createElement("input");
      playerCountInput.setAttribute('type',"text");
      playerCountInput.setAttribute('name',"countinput");
      playerCountInput.setAttribute('value',playerCount);
      playerCountInput.setAttribute('style',"display:none;");

      dataSender.appendChild(playerListInput);
      dataSender.appendChild(playerCountInput);

      dataSender.submit();
}

function clearChoices (id)
{
      var arr = document.getElementById(id).getElementsByTagName("label");
	for(var i = 0; i < arr.length; i++)
	      arr[i].style.color = "gray";
}

function getRadioCheckedValue(name)
{
      var oRadio = document.getElementById(name).elements;
      for(var i = 0; i < oRadio.length; i++)
            if(oRadio[i].checked)
                  return oRadio[i].value;
      return '';
}

function sendLevelData (data)
{
      var levelInfoList = new Array();

      levelInfoList[0] = document.getElementById("levelnameinput").value;
      levelInfoList[1] = document.getElementById("levelselector").value;
      levelInfoList[2] = getRadioCheckedValue("duration");
      levelInfoList[3] = getRadioCheckedValue("food");
      levelInfoList[4] = getRadioCheckedValue("water");
      levelInfoList[5] = getRadioCheckedValue("rm");
      levelInfoList[6] = getRadioCheckedValue("sh");
      levelInfoList[7] = getRadioCheckedValue("d");
      levelInfoList[8] = document.getElementById("levelimg").src;

      var dataSender = document.createElement("form");
      dataSender.setAttribute('method',"post");
      dataSender.setAttribute('action',"game.php");
      dataSender.setAttribute('style',"display:none;");

      var levelInfoInput = document.createElement("input");
      levelInfoInput.setAttribute('type',"text");
      levelInfoInput.setAttribute('name',"levelinput");
      levelInfoInput.setAttribute('value',levelInfoList);
      levelInfoInput.setAttribute('style',"display:none;");
      
      var listInfoInput = document.createElement("input");
      listInfoInput.setAttribute('type',"text");
      listInfoInput.setAttribute('name',"listinput");
      listInfoInput.setAttribute('value', data);
      listInfoInput.setAttribute('style',"display:none;");

      dataSender.appendChild(levelInfoInput);
      dataSender.appendChild(listInfoInput);
      dataSender.submit();
}

function Player (id, name, attack, defense, speed, resourcefulness, instinct, clss, img, clssimg)
{
      this.id = id;
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.speed = speed;
      this.resourcefulness = resourcefulness;
      this.instinct = instinct;
      this.clss = clss;
      this.img = img;
      this.clssimg = clssimg;
      this.health = 10;
      this.kills = 0;
      this.trapped = false;
      this.allies = new Array();
      this.enemies = new Array();
      this.items = new Array();
      this.luck = Math.pow(this.attack, 0.1) + Math.pow(this.defense, 0.4) + Math.pow(this.speed, 0.1) + Math.pow(this.resourcefulness, 0.5) + Math.pow(this.instinct, 0.2)
                  + Math.random()*(10 - Math.pow(10, 0.1) - Math.pow(10, 0.4) - Math.pow(10, 0.1) - Math.pow(10, 0.5) - Math.pow(10, 0.2)) + 1;
}

function processPlayers (list)
{
      var playerList = list.split(",");
      for (var i = 0; i < playerList.length; i++)
      {
            var playerVals = playerList[i].split(";");
            var stats = (playerVals[1].substring(1, playerVals[1].length - 1)).split("][");
            players.push(new Player(i, playerVals[0], stats[0], stats[1], stats[2], stats[3], stats[4], playerVals[2], playerVals[3], playerVals[4]));
      }
}

function drawScoreboard (list)
{
      for (var i = 0; i < players.length; i++)
      {
            var playerInScoreboard = document.createElement("div");
            playerInScoreboard.setAttribute('class',"playerinscoreboard");
      
            var playerImg = document.createElement("img");
            playerImg.setAttribute('src', players[i].img);
            
            var playerClass = document.createElement("img");
            playerClass.setAttribute('class',"classoverlay");
            playerClass.setAttribute('src', players[i].clssimg);
            playerClass.setAttribute('ondragstart', "return false");
            
            var name = document.createElement("div");
            name.innerHTML = "Name: <span>" + players[i].name + "</span>";
            
            var health = document.createElement("div");
            health.innerHTML = "Health: <span>" + players[i].health + "</span>";
            
            var kills = document.createElement("div");
            kills.innerHTML = "Kills: <span>" + players[i].kills + "</span>";
      
            playerInScoreboard.appendChild(playerImg);
            playerInScoreboard.appendChild(playerClass);
            playerInScoreboard.appendChild(name);
            playerInScoreboard.appendChild(health);
            playerInScoreboard.appendChild(kills);
            
            document.getElementsByClassName("scoreboard")[0].appendChild(playerInScoreboard);
      }
}

function createModule (message)
{
      var module = document.createElement("div")
      module.setAttribute("class", "module");
      module.innerHTML = "<span class='moduletime'>" + getTime() + "</span> " + message;
      
      if (document.getElementsByClassName("module")[0])
      {
            document.getElementsByClassName("console")[0].insertBefore(module, document.getElementsByClassName("module")[0]);
      }
      else
      {
            document.getElementsByClassName("console")[0].appendChild(module);
      }
}

function playGame ()
{
      if (!document.getElementsByClassName("module")[0])
      {
            timeLimit = parseInt(document.getElementById("2").innerHTML);
            createModule("" + timeLimit + "-minute game initialized.");
            gameInterval = timeLimit/32;
            var speedOrd = orderPlayers("speed");
            for (var i = 0; i < speedOrd.length; i++)
            {
                  giveItem(speedOrd[i].name, "random");
                  alert(speedOrd[i].speed);
            }
      }
}

function getTime()
{
      var d=new Date();
      var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
      
      if(nhour==0){ap=" AM";nhour=12;}
      else if(nhour>12){nhour-=12;}
      
      if(nmin<=9) nmin="0"+nmin;
      if(nsec<=9) nsec="0"+nsec;
      
      return (""+nhour+":"+nmin+":"+nsec+"");
}

function orderPlayers (stat)
{
      var tempPlayers = players.slice(0);
      var max;
      
      if (stat == 'attack')
      {
            for (var i = 0; i < tempPlayers.length; i++)
            {
                  max = i;
                  
                  for (var j = i + 1; j < tempPlayers.length; j++)
                  {
                        if (tempPlayers[j].attack > tempPlayers[max].attack)
                        {
                              max = j;
                        }
                  }
                  
                  if (i != max)
                  {
                        var temp = tempPlayers[i];
                        tempPlayers[i] = tempPlayers[j];
                        tempPlayers[j] = temp;
                  }
            }
      }
      else if (stat == 'defense')
      {
            for (var i = 0; i < tempPlayers.length; i++)
            {
                  max = i;
                  
                  for (var j = i + 1; j < tempPlayers.length; j++)
                  {
                        if (tempPlayers[j].defense > tempPlayers[max].defense)
                        {
                              max = j;
                        }
                  }
                  
                  if (i != max)
                  {
                        var temp = tempPlayers[i];
                        tempPlayers[i] = tempPlayers[j];
                        tempPlayers[j] = temp;
                  }
            }
      }
      else if (stat == 'speed')
      {
            for (var i = 0; i < tempPlayers.length; i++)
            {
                  max = i;
                  
                  for (var j = i + 1; j < tempPlayers.length; j++)
                  {
                        if (tempPlayers[j].speed > tempPlayers[max].speed)
                        {
                              max = j;
                        }
                  }
                  
                  if (i != max)
                  {
                        var temp = tempPlayers[i];
                        tempPlayers[i] = tempPlayers[j];
                        tempPlayers[j] = temp;
                  }
            }
      }
      else if (stat == 'resourcefulness')
      {
            for (var i = 0; i < tempPlayers.length; i++)
            {
                  max = i;
                  
                  for (var j = i + 1; j < tempPlayers.length; j++)
                  {
                        if (tempPlayers[j].resourcefulness > tempPlayers[max].resourcefulness)
                        {
                              max = j;
                        }
                  }
                  
                  if (i != max)
                  {
                        var temp = tempPlayers[i];
                        tempPlayers[i] = tempPlayers[j];
                        tempPlayers[j] = temp;
                  }
            }
      }
      else
      {
            for (var i = 0; i < tempPlayers.length; i++)
            {
                  max = i;
                  
                  for (var j = i + 1; j < tempPlayers.length; j++)
                  {
                        if (tempPlayers[j].instinct > tempPlayers[max].instinct)
                        {
                              max = j;
                        }
                  }
                  
                  if (i != max)
                  {
                        var temp = tempPlayers[i];
                        tempPlayers[i] = tempPlayers[j];
                        tempPlayers[j] = temp;
                  }
            }
      }
      return tempPlayers;
}

function giveItem (playerName, item)
{
      if (item == "random")
      {
            var group = Math.floor(Math.random()*3) + 1;
            if (group == 1)
                  item = weapons[Math.floor(Math.random()*weapons.length)];
            else if (group == 2)
                  item = food[Math.floor(Math.random()*food.length)];
            else
                  item = tools[Math.floor(Math.random()*tools.length)];
      }
      var msg = Math.floor(Math.random()*3) + 1;
      if (msg == 1)
            createModule(playerName + " picks up a " + item + ".");
      else if (msg == 2)
            createModule(playerName + " takes a " + item + ".");
      else
            createModule(playerName + " finds a " + item + ".");
      for (var i = 0; i < players.length; i++)
      {
            if (players[i].name == playerName)
            {
                  players[i].items.push(item);
                  return item;
            }
      }
}

function getIndexOfName (name)
{
      for (var i = 0; i < players.length; i++)
            if (players[i].name == name)
                  return i;
      return -1;
}