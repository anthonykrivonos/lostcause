<!DOCTYPE HTML>
<!-- Property of Anthony Krivonos and the LostCause group. Patent pending. -->
<html>
      <head>
            <title>LostCause</title>
            <link rel="stylesheet" type="text/css" href="theme.css?<?php echo time(); ?>">
            <script src="lostcause.js?<?php echo time(); ?>"></script>
            <script src="jquery.js"></script>
            <script type="text/javascript">
                  var bg;
            </script>
      </head>
      <body class="index" onload="initialize(LOAD); switchScreen(LOAD);">
            <img id="indexbg" src="" class="indexbg" ondragstart="return false;"/>
            <div id="loadscreen">
                  <div class="loginpopup">
                        <p style="cursor:default;">LostCause</p>
                        <span>Alpha 2</span>
                        <form action="" method="POST" autocomplete="off">
                              <input maxlength = "11" name="uname" type="text" placeholder="Username" class="uname"/>
                              <input maxlength = "11" name="pword" type="text" placeholder="Password" class="pword"/>
                              <input type="submit" class="submit" value="Log In"/>
                        </form>
                        <div class="pwordhelp">Input password safely.</div>
                        <button class="reg">Register</button>
                  </div>
            </div>
            <div id="helpscreen">
                  <div class="helppopup">
                        <p onclick="switchScreen(LOAD);">LostCause</p>
                        <span id="quote"></span>
                  </div>
            </div>
            <div id="donatescreen">
                  <div class="donatepopup">
                        <p onclick="switchScreen(LOAD);">LostCause</p>
                        <span>Please help us survive</span>
                        <object class="gofundme" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" title="Click here to fund LostCause!" type="application/x-shockwave-flash"><param name="movie" value="//funds.gofundme.com/Widgetflex.swf" /><param name="quality" value="high" /><param name="flashvars" value="page=lostcausedev&template=1" /><param name="wmode" value="transparent" /><embed allowScriptAccess="always" src="//funds.gofundme.com/Widgetflex.swf" quality="high" flashVars="page=lostcausedev&template=1" type="application/x-shockwave-flash" wmode="transparent" width="258" height="338"></embed></object>
                  </div>
            </div>
            <div id="infoscreen">
                  <div class="helppopup">
                        <p onclick="switchScreen(LOAD);">LostCause</p>
                        <span>Information</span>
                  </div>
            </div>
            <form id="gameform" action=".php" method="POST" style="display:none;">
                  <input id="gameselect" name="game" type="text"/>
            </form>
            <img src="images/offline.png" class="playoffline" ondragstart="return false;" onclick="setUpGame(OFFLINE);"/>
            <form id="bgform" action="charsetup.php" method="POST" style="display:none;">
                  <input id="bgselect" name="bg" type="text"/>
            </form>
            <img src="images/help.png" class="gamehelp" ondragstart="return false;" onclick="switchScreen(HELP);"/>
            <img src="images/donate.png" class="donate" ondragstart="return false;" onclick="switchScreen(DONATE);"/>
            <img src="images/info.png" class="info" ondragstart="return false;" onclick="switchScreen(INFO);"/>
      </body>
</html>
