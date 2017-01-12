<!DOCTYPE HTML>
<!-- Property of Anthony Krivonos and the LostCause group. Patent pending. -->
<html>
      <head>
            <title>Player Setup</title>
            <link rel="stylesheet" type="text/css" href="theme.css?<?php echo time(); ?>">
            <script src="lostcause.js"></script>
            <script src="jquery.js"></script>
            <script type="text/javascript">
                  var test = "<?php echo $_POST['bg']?>";
                  if (test != '')
                  {
                        var bg = "<?php echo $_POST['bg']?>";
                  }
            </script>
      </head>
      <body style="overflow-x:visible;" class="index" onload="initialize(OFFLINE); initializePlayers();">
            <img id="indexbg" src="" class="indexbg" ondragstart="return false;" onclick="clearInput();"/>
            <div id="offline" class="offline">
                  <p onclick="location.href='index.php'">LostCause</p>
                  <div class="charselect">
                        <div>Character Selector</div>
                        <div id="downarrow"><img src="images/downarrow.jpg" ondragstart="return false;" onclick="dropDown();"/></div>
                  </div>
                  <div class="chardown" id="charselector">
                        <div class="topchardownbg"></div>
                        <form action="" method="POST" autocomplete="off" class="charform">
                              <input id="charnameinput" maxlength = "14" name="name" type="text" placeholder="Name"/>
                              <div class="chooseclass" ondragstart="return false;">
                                    <label onclick="setClass('pacifist');" title="Pacifist"><input style="display:none;" class="cl" type="radio" name="class" value="pacifist" onclick=""><img id="pacifist" src="images/wborder/pacifist.png"/></label>
                                    <label onclick="setClass('gatherer');" title="Gatherer"><input style="display:none;" class="cl" type="radio" name="class" value="gatherer"><img id="gatherer" src="images/woborder/gatherer.png"/></label>
                                    <label onclick="setClass('medic');" title="Medic"><input style="display:none;" class="cl" type="radio" name="class" value="medic"><img id="medic" src="images/woborder/medic.png"/></label>
                                    <label onclick="setClass('craftsman');" title="Craftsman"><input style="display:none;" class="cl" type="radio" name="class" value="craftsman"><img id="craftsman" src="images/woborder/craftsman.png"/></label>
                                    <label onclick="setClass('hacker');" title="Hacker"><input style="display:none;" class="cl" type="radio" name="class" value="hacker"><img id="hacker" src="images/woborder/hacker.png"/></label>
                                    <label onclick="setClass('hunter');" title="Hunter"><input style="display:none;" class="cl" type="radio" name="class" value="hunter"><img id="hunter" src="images/woborder/hunter.png"/></label>
                                    <label onclick="setClass('warrior');" title="Warrior"><input style="display:none;" class="cl" type="radio" name="class" value="warrior"><img id="warrior" src="images/woborder/warrior.png"/></label>
                              </div>
                        </form>
                        <img id="playerimg" src="images/testimage.png" style="width:200px; height:200px; margin-top: 18px; border:solid;"/>
                        <div class="slider" ondragstart="return false;">
                              <img src="images/larrow.png" class="L" onclick="drag(L, 'One', 'atk');"/>
                              <img src="images/rarrow.png" class="R" onclick="drag(R, 'One', 'atk');"/>
                              <img class="line" style="margin-top:42px;" src="images/line.png"/>
                              <img class="vlinel" src="images/vertline.png">
                              <img class="vliner" src="images/vertline.png">
                              <div class="left"><img id="sliderOne" src="images/nav.png" class="nav" style="margin-left:0px;"/></div>
                        </div>
                        <div class="counttag">Attack: </div><div id="atkcount" class="countid">5</div>
                        <div class="slider" style="position:static; margin-top: -20px;" ondragstart="return false;">
                              <img src="images/larrow.png" class="L" onclick="drag(L, 'Two', 'def');"/>
                              <img src="images/rarrow.png" class="R" onclick="drag(R, 'Two', 'def');"/>
                              <img class="line" style="margin-top:42px;" src="images/line.png"/>
                              <img class="vlinel" src="images/vertline.png">
                              <img class="vliner" src="images/vertline.png">
                              <div class="left"><img id="sliderTwo" src="images/nav.png" class="nav" style="margin-left:0px;"/></div>
                        </div>
                        <div class="counttag">Defense: </div><div id="defcount" class="countid">5</div>
                        <div class="slider" style="position:static; margin-top: -20px;" ondragstart="return false;">
                              <img src="images/larrow.png" class="L" onclick="drag(L, 'Three', 'speed');"/>
                              <img src="images/rarrow.png" class="R" onclick="drag(R, 'Three', 'speed');"/>
                              <img class="line" style="margin-top:42px;" src="images/line.png"/>
                              <img class="vlinel" src="images/vertline.png">
                              <img class="vliner" src="images/vertline.png">
                              <div class="left"><img id="sliderThree" src="images/nav.png" class="nav" style="margin-left:0px;"/></div>
                        </div>
                        <div class="counttag">Speed: </div><div id="speedcount" class="countid">5</div>
                        <div class="slider" style="position:static; margin-top: -20px;" ondragstart="return false;">
                              <img src="images/larrow.png" class="L" onclick="drag(L, 'Four', 'res');"/>
                              <img src="images/rarrow.png" class="R" onclick="drag(R, 'Four', 'res');"/>
                              <img class="line" style="margin-top:42px;" src="images/line.png"/>
                              <img class="vlinel" src="images/vertline.png">
                              <img class="vliner" src="images/vertline.png">
                              <div class="left"><img id="sliderFour" src="images/nav.png" class="nav" style="margin-left:0px;"/></div>
                        </div>
                        <div class="counttag">Resourcefulness: </div><div id="rescount" class="countid">5</div>
                        <div class="slider" style="position:static; margin-top: -20px;" ondragstart="return false;">
                              <img src="images/larrow.png" class="L" onclick="drag(L, 'Five', 'ins');"/>
                              <img src="images/rarrow.png" class="R" onclick="drag(R, 'Five', 'ins');"/>
                              <img class="line" style="margin-top:42px;" src="images/line.png"/>
                              <img class="vlinel" src="images/vertline.png">
                              <img class="vliner" src="images/vertline.png">
                              <div class="left"><img id="sliderFive" src="images/nav.png" class="nav" style="margin-left:0px;"/></div>
                        </div>
                        <div class="counttag">Instinct: </div><div id="inscount" class="countid">5</div>
                        <button onclick="updatePlayer();" class="updatebutton">Update Character</button>
                  </div>
            </div>
            <div id="charlist" class="charlist" ondragstart="return false;">
                  <div class="addsub"><span class = "cbutton" onclick="setSelect(M);">Continue</span><span class = "as" onclick="editCells(ADD);">+</span><span class = "as" onclick="editCells(SUB);">-</span><span id="pcount" class="playercount">0</span><span id="scount" onclick="limitChange();" class="statcount">Stat Limit: <span id="limit">35</span></span></div>
            <!-- Example     <div class="character" onclick="setPlayer(0);">
                        <div class="charname">Larry</div>
                        <img class="pfp" src="images/testimage.png"/>
                        <img class="pclass" src="images/wborder/hunter.png"/>
                        <div class="charstats">[9][7][9][8][3]</div>
                        <div class="charclass">Hunter</div>
                  </div>-->
            </div>
            <span class="fullcover"></span>
            <span id="proceed">
                  <div>Proceed?</div>
                  <span>You cannot change your characters again.</span>
                  <img src="images/loading.gif" class="loading"/>
                  <button id="proYes" onclick="setSelect(R);">Yes</button>
                  <button id="proNo" style="margin-left: 15px;" onclick="setSelect(L);">No</button>
            </span>
      </body>
</html>
