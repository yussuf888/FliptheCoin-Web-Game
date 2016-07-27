document.getElementById('click').onclick = click;

function click()
{
    if (document.getElementById('option-tail').checked == true || document.getElementById('option-head').checked == true)
    {
        x = (Math.floor(Math.random() * 2) == 0);
        if (x)
        {
            flip("Head");
        }
        else
        {
            flip("Tail");
        }
        (
            function ()
            {
                var Coin  = document.getElementById("Coin");
                var Box   = document.getElementById("Box");
                var click = document.getElementById("click");
                var show  = function ()
                {
                    Coin.style.display  = "block";
                    Box.style.display   = "none";
                    click.style.display = "none";
                    setTimeout(hide, 3000);
                }
                var hide = function ()
                {
                    Coin.style.display  = "none";
                    Box.style.display   = "block";
                    click.value = "PLAY AGAIN";
                    click.style.margin = "auto";
                    click.style.display = "block";
                    $("#option-head").prop("checked", false);
                    $("#option-tail").prop("checked", false);
                }
                show();
            }
        )()
    }
    else
    {
        alert("Please select head or tail.");
    }
};

function flip(Coin)
{
    if (Coin == "Head")
    {
        if (document.querySelector('input[name="selector"]:checked').value == "Head")
        {
            document.getElementById("result").innerHTML = '<img width="220" height="220" src=\'image/head.png\'><p class="result">Head has been chosen. You won!!!</p>';
        }
        else
        {
            document.getElementById("result").innerHTML = '<img width="220" height="220" src=\'image/head.png\'><p class="result">Head has been chosen. Sorry you lose!!! </p>';
        }
    }
    else
    {
        if (document.querySelector('input[name="selector"]:checked').value == "Tail")
        {
            document.getElementById("result").innerHTML = '<img width="220" height="220" src=\'image/tail.png\'><p class="result">Tail has been chosen. You won!!!</p>';
        }
        else
        {
            document.getElementById("result").innerHTML = '<img width="220" height="220" src=\'image/tail.png\'><p class="result">Tail has been chosen. Sorry you lose!!! </p>';
        }
    }
};

function mySelect()
{
    document.getElementById("result").innerHTML = '<img style="margin-top: 0px; margin-bottom: 30px;" width="220" height="220" src=\'image/middle.png\'>';
}

$("#click").click(function ()
{
    $('html, body').animate(
    {
        scrollTop: $("#Coin").offset().top
    }, 2000);
});

/*
var data = '&r=' + escape(document.referrer) + '&n=' + escape(navigator.userAgent) + '&p=' + escape(navigator.userAgent) + '&g=' + escape(document.location.href);
if (navigator.userAgent.substring(0, 1) > '3')
data = data + '&sd=' + screen.colorDepth + '&sw=' + escape(screen.width + 'x' + screen.height);
document.write('<a href="http://www.1freecounter.com/stats.php?i=117922" target=\"_blank\" >');
document.write('<img alt="Free Counter" style="display: none;" border=0 hspace=0 ' + 'vspace=0 src="http://www.1freecounter.com/counter.php?i=117922' + data + '">');
document.write('</a>');
*/