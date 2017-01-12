<!DOCTYPE HTML>
<!-- Property of Anthony Krivonos and the LostCause group. Patent pending. -->
<?php
      $_SESSION["listinput"] = $_POST["listinput"];
      $_SESSION["countinput"] = $_POST["countinput"];
?>
<html>
      <head>
            <title>Level Setup</title>
            <link rel="stylesheet" type="text/css" href="theme.css?<?php echo time(); ?>">
            <script src="lostcause.js?<?php echo time(); ?>"></script>
            <script src="jquery.js"></script>
            <script type="text/javascript">
                  var test = "<?php echo $_POST['bg']?>";
                  if (test != '')
                  {
                        var bg = "<?php echo $_POST['bg']?>";
                  }
                  listinput = "<?php echo $_SESSION['listinput']?>";
            </script>
      </head>
      <body style="overflow-x:visible;" class="index" onload="initialize(OFFLINE);">
            <img id="indexbg" src="" class="indexbg" ondragstart="return false;" onclick="clearInput();"/>
            <div id="offline" class="offline">
                  <p onclick="location.href='index.php'">LostCause</p>
                  <div class="charselect">
                        <div>Level Editor</div>
                  </div>
                  <div class="chardown" style="height:575px; display:inline-block;">
                        <div class="topchardownbg"></div>
                        <form action="" method="POST" autocomplete="off" class="charform">
                              <input id="levelnameinput" maxlength = "14" name="name" type="text" placeholder="Game Title"/>
                        </form>
                        <br/>
                        Duration
                        <br/>
                        <div class="roundBorder">
                              <form id="duration">
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('duration'); this.style.color = 'black';"><input type="radio" name="duration" value="1h"/>1h</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('duration'); this.style.color = 'black';"><input type="radio" name="duration" value="30m"/>30m</label>
                                    <label style="border-left: none; color:black;" class="levelbutton" onclick="clearChoices('duration'); this.style.color = 'black';"><input type="radio" name="duration" value="10m" checked/>10m</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('duration'); this.style.color = 'black';"><input type="radio" name="duration" value="5m"/>5m</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('duration'); this.style.color = 'black';"><input type="radio" name="duration" value="1m"/>1m</label>
                              </form>
                        </div>
                        <br/>
                        Food Availability
                        <div class="roundBorder">
                              <form id="food">
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('food'); this.style.color = 'black';"><input type="radio" name="food" value="a"/>Abundant</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('food'); this.style.color = 'black';"><input type="radio" name="food" value="h"/>High</label>
                                    <label style="border-left: none; color:black;" class="levelbutton" onclick="clearChoices('food'); this.style.color = 'black';"><input type="radio" name="food" value="m" checked/>Medium</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('food'); this.style.color = 'black';"><input type="radio" name="food" value="l"/>Low</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('food'); this.style.color = 'black';"><input type="radio" name="food" value="n"/>None</label>
                              </form>
                        </div>
                        <br/>
                        Water Availability
                        <div class="roundBorder">
                              <form id="water">
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('water'); this.style.color = 'black';"><input type="radio" name="water" value="a"/>Abundant</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('water'); this.style.color = 'black';"><input type="radio" name="water" value="h"/>High</label>
                                    <label style="border-left: none; color:black;" class="levelbutton" onclick="clearChoices('water'); this.style.color = 'black';"><input type="radio" name="water" value="m" checked/>Medium</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('water'); this.style.color = 'black';"><input type="radio" name="water" value="l"/>Low</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('water'); this.style.color = 'black';"><input type="radio" name="water" value="n"/>None</label>
                              </form>
                        </div>
                        <br/>
                        Raw Materials
                        <div class="roundBorder">
                              <form id="rm">
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('rm'); this.style.color = 'black';"><input type="radio" name="rm" value="a"/>Abundant</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('rm'); this.style.color = 'black';"><input type="radio" name="rm" value="h"/>High</label>
                                    <label style="border-left: none; color:black;" class="levelbutton" onclick="clearChoices('rm'); this.style.color = 'black';"><input type="radio" name="rm" value="m" checked/>Medium</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('rm'); this.style.color = 'black';"><input type="radio" name="rm" value="l"/>Low</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('rm'); this.style.color = 'black';"><input type="radio" name="rm" value="n"/>None</label>
                              </form>
                        </div>
                        <br/>
                        Shelter Frequency
                        <div class="roundBorder">
                              <form id="sh">
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('sh'); this.style.color = 'black';"><input type="radio" name="sh" value="e"/>Everywhere</label>
                                    <label style="border-left: none; color:black;" class="levelbutton" onclick="clearChoices('sh'); this.style.color = 'black';"><input type="radio" name="sh" value="s" checked/>Scattered</label>
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('sh'); this.style.color = 'black';"><input type="radio" name="sh" value="b"/>Barren</label>
                              </form>
                        </div>
                        <br/>
                        Disease
                        <div class="roundBorder">
                              <form id="d">
                                    <label style="border-left: none; color:gray;" class="levelbutton" onclick="clearChoices('d'); this.style.color = 'black';"><input type="radio" name="d" value="y"/>Yes</label>
                                    <label style="border-left: none; color:black;" class="levelbutton" onclick="clearChoices('d'); this.style.color = 'black';"><input type="radio" name="d" value="n" checked/>No</label>
                              </form>
                        </div>
                  </div>
            </div>
            <div id="charlist" class="charlist" ondragstart="return false;">
                  <div class="addsub" style="width:174px; margin-bottom: 0px;">
                        <span class = "cbutton" onclick="setSelect(T);">Play Game</span>
                        <select id="levelselector">
                              <option value="" disabled="true" selected="true">Select Level</option>
                              <option value="airport">Airport</option>
                              <option value="barracks">Barracks</option>
                              <option value="city">City</option>
                              <option value="desert">Desert</option>
                              <option value="dungeon">Dungeon</option>
                              <option value="factory">Factory</option>
                              <option value="island">Island</option>
                              <option value="mountains">Mountains</option>
                              <option value="pueblo">Pueblo</option>
                              <option value="underground">Underground</option>
                              <option value="village">Village</option>
                              <option value="woods">Woods</option>
                        </select>
                  </div>
                  <img id="levelimg" style="width:90%;" src="images/testimage.png"/>
                  <br/>
            </div>
            <span class="fullcover"></span>
            <span id="proceed">
                  <div>Play Game?</div>
                  <span style="text-align: center;">You may not alter the level again.</span>
                  <img src="images/loading.gif" class="loading"/>
                  <button id="proYes" onclick="setSelect(S, listinput);">Yes</button>
                  <button id="proNo" style="margin-left: 15px;" onclick="setSelect(L);">No</button>
            </span>
      </body>
</html>
