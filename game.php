<!DOCTYPE HTML>
<!-- Property of Anthony Krivonos and the LostCause group. Patent pending. -->
<?php
      $_SESSION["levelinput"] = $_POST["levelinput"];
      $_SESSION["listinput"] = $_POST["listinput"];
?>
<html>
      <head>
            <title>Lost Cause Offline</title>
            <link rel="stylesheet" type="text/css" href="theme.css?<?php echo time(); ?>">
            <script src="lostcause.js?<?php echo time(); ?>"></script>
            <script src="jquery.js"></script>
            <script>
                  playerListInput = "<?php echo $_SESSION['listinput']?>";
            </script>
      </head>
      <body style="overflow-x:visible;" class="index" onload="processPlayers(playerListInput); initialize(2);">
            <img id="indexbg" src="" class="indexbg" ondragstart="return false;"/>
            <br/>
            <span id="consoletitle">Console</span>
            <div class="console">
            </div>
            <div class="leftpanel">
                  <div class="timebox">
                        <div>Time Remaining</div>
                        <p id="timerem" style="font-family:clockFont;"></p>
                        <div>Current Time</div>
                        <p id="clockbox" style="font-family:clockFont;"></p>
                  </div>
                  <div class="scoreboard">
                        <div class="scoreboardtitle">Player Scoreboard</div>
                        <br/>
                  </div>
            </div>
            <div class="ban">
                  <span style="font-family:titleFont; margin-right:30px;">LostCause</span>
                  <a href="index.php">Quit</a>
                  <span style="font-family:subFont;" id="0"></span> |
                  <span id="1"></span> |
                  <span id="2"></span> |
                  Food: <span id="3"></span> |
                  Water: <span id="4"></span> |
                  Raw Materials: <span id="5"></span> |
                  Shelter: <span id="6"></span> |
                  <span id="7"></span>
            </div>
            <script type="text/javascript">
                  var levelinput = "<?php print_r($_SESSION['levelinput'])?>".split(",");
                  var listinput =  "<?php print_r($_SESSION['listinput'])?>".split(",");
                  document.getElementById("0").innerHTML = levelinput[0];
                  document.getElementById("1").innerHTML = levelinput[1].charAt(0).toUpperCase() + levelinput[1].slice(1);
                  if (levelinput[2] == "1h")
                  {
                        document.getElementById("2").innerHTML = "60 Minutes";
                        countdown(60);
                  }
                  else if (levelinput[2] == "30m")
                  {
                        document.getElementById("2").innerHTML = "30 Minutes";
                        countdown(30);
                  }
                  else if (levelinput[2] == "10m")
                  {
                        document.getElementById("2").innerHTML = "10 Minutes";
                        countdown(10);
                  }
                  else if (levelinput[2] == "5m")
                  {
                        document.getElementById("2").innerHTML = "5 Minutes";
                        countdown(5);
                  }
                  else
                  {
                        document.getElementById("2").innerHTML = "1 Minute";
                        countdown(1);
                  }
                  for (var i = 3; i < 6; i++)
                  {
                        if (levelinput[i] == "a")
                              document.getElementById(i).innerHTML = "Abundant";
                        if (levelinput[i] == "h")
                              document.getElementById(i).innerHTML = "High";
                        if (levelinput[i] == "m")
                              document.getElementById(i).innerHTML = "Medium";
                        if (levelinput[i] == "l")
                              document.getElementById(i).innerHTML = "Low";
                        if (levelinput[i] == "n")
                              document.getElementById(i).innerHTML = "None";
                  }
                  if (levelinput[6] == "e")
                        document.getElementById(6).innerHTML = "Everywhere";
                  else if (levelinput[6] == "s")
                        document.getElementById(6).innerHTML = "Scattered";
                  else
                        document.getElementById(6).innerHTML = "Barren";
                  if (levelinput[7] == "y")
                        document.getElementById(7).innerHTML = "Vulnerable";
                  else
                        document.getElementById(7).innerHTML = "Invulnerable";
                        
                  function startTimer(duration, display)
                  {
                        var timer = duration, minutes, seconds;
                        setInterval(function ()
                        {
                              minutes = parseInt(timer / 60, 10);
                              seconds = parseInt(timer % 60, 10);
                              
                              minutes = minutes < 10 ? "0" + minutes : minutes;
                              seconds = seconds < 10 ? "0" + seconds : seconds;
                              
                              display.innerHTML = minutes + ":" + seconds;
                              
                              if (--timer < 0) 
                              {
                                    timer = duration;
                              }
                              getClock();
                        }, 1000);
                  }
                  
                  function countdown(time)
                  {
                        var dp = document.getElementById("timerem");
                        if (time == 60)
                              startTimer(3600, dp);
                        else if (time == 30)
                              startTimer(1800, dp);
                        else if (time == 10)
                              startTimer(600, dp);
                        else if (time == 5)
                              startTimer(300, dp);
                        else
                              startTimer(60, dp);
                  }
                  
                  function getClock()
                  {
                        var d=new Date();
                        var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
                        
                        if(nhour==0){ap=" AM";nhour=12;}
                        else if(nhour>12){nhour-=12;}
                        
                        if(nmin<=9) nmin="0"+nmin;
                        if(nsec<=9) nsec="0"+nsec;
                        
                        document.getElementById("clockbox").innerHTML = ""+nhour+":"+nmin+":"+nsec+"";
                  }
                  
                  orderPlayers('attack');
            </script>
      </body>
</html>
