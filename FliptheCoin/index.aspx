<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="index.aspx.vb" Inherits="FliptheCoin.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

    <head runat="server">

        <meta name="msvalidate.01" content="E34A1A0526B70B2582F63C709A5095A7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Just Try Your Luck By Flip The Coin</title>

        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link rel="stylesheet" type="text/css" href="css/font.css"/>  
    
    </head>

    <body>

        <h1>Tails or Heads Game</h1>
        <p>Please select head or tail.</p>
        <div class="container">
	        <table>
	 	        <tr>
	  		        <td>
	  			        <ul>
	  				        <li>
	    				        <input type="radio" id="option-tail" onclick="mySelect()" name="selector" value="Tail"/>
	    				        <label for="option-tail">Tail</label>
	    				        <div class="check"></div>
					        </li>
				        </ul>
			        </td>
			        <td>
				        <ul>
	  				        <li>
	    				        <input type="radio" id="option-head" onclick="mySelect()" name="selector" value="Head"/>
	    				        <label for="option-head">Head</label>
	    				        <div class="check"></div>
					        </li>
				        </ul>
			        </td>
		        </tr>
	        </table>
        </div>
        <input type="button" name="click" class="button" id="click" value="LET'S PLAY" />
        <%--Online--<div id = "Coin"><img id = "myImage" src = "http://i.giphy.com/3oEjI73Es1Tblwy6T6.gif"/></div>--Online--%>
        <div id = "Coin"><img id = "myImage" src = "image/turn-coin.gif"/></div>
        <div id = "Box"><span id="result"></span></div>

    </body>

    <script type="text/javascript" src="script/jquery.js"></script>
    <script type="text/javascript" src="script/flipcoin.js"></script>
        
</html>
