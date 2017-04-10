window.onload =  function(){
    var o="<table class= 'begin' border=1>"
    var i=0;
    var color;
    var img;
    for (let n=0;n<10;n++){
        o+='<tr>';
        for(let b=0;b<10;b++){
            if((n+b)%2==0)
                color = 'blanc';
            else
                color = 'noir';
            img="";
            if((n+b)%2==1){
                if(n==0)
                    img = '<img src="images/pn.png" alt="ok" width=70px height=70px>';
                if(n==1)
                    img = '<img src="images/pn.png" alt="ok" width=70px height=70px>';
                if(n==2)
                    img = '<img src="images/pn.png" alt="ok" width=70px height=70px >';
                if(n==3)
                    img = '<img src="images/pn.png" alt="ok" width=70px height=70px>';
                if(n==6)
                    img = '<img src="images/pb.png" alt="ok" width=70px height=70px>';
                if(n==7)
                    img = '<img src="images/pb.png" alt="ok" width=70px height=70px>';
                if(n==8)
                    img = '<img src="images/pb.png" alt="ok" width=70px height=70px>';
                if(n==9)
                    img = '<img src="images/pb.png" alt="ok" width=70px height=70px>';
            }
            if((n+b)%2==0){
                if(n == 0){
                    img = '<img src="images/inv.png" alt="ok" width=70px height=70px>';
                }
                if(n == 1){
                    img = '<img src="images/inv.png" alt="ok" width=70px height=70px>';
                }
            }

            o=o+'<td id= c'+n+'-l'+b+' class = '+color+'>'+img+'</td>'; 
        }
        o+='</tr>'; 
    }
    o+='<div class="cadre"><p>Joueur : Noir</p></div>';
    document.getElementById('plateau').innerHTML = o;

    update();
};


update = function(){

    var click=false;
    var click2=false;
    var click3;
    var ok = false;
    var play = "black";
    var nbpionb = 20;
    var nbpionn = 20;

    $('td')
    .mouseover(function() {
        if(nbpionb == 0){
            alert("Le joueur possédant les pions noirs a gagné !!!!!");
        }
        if(nbpionn == 0){
            alert("Le joueur possédant les pions blancs a gagné !!!!!");
        }
        var a = $(this).attr('id');
        var b = parseInt(a.substring(2,1));
        var c = parseInt(a.substring(5,4));
        var case1 = "c"+ (b+1) + "-l" + (c-1);
        var case2 = "c"+ (b+1) + "-l" + (c+1);
        var case3 = "c"+ (b-1) + "-l" + (c-1);
        var case4 = "c"+ (b-1) + "-l" + (c+1);
        var case5 = "c"+ (b-2) + "-l" + (c-2);
        var case6 = "c"+ (b-2) + "-l" + (c+2);
        var case7 = "c"+ (b+2) + "-l" + (c-2);
        var case8 = "c"+ (b+2) + "-l" + (c+2);

        if(!click){
            if(play == "black"){
                if($(this).children().attr('src') == 'images/pn.png'){
                    if($("#"+case1).children().attr('src') == undefined && $("#"+case2).children().attr('src') == undefined){
                        $(this).attr('class', 'select')
                        $("#"+case1).attr('class', 'select')
                        $("#"+case2).attr('class', 'select')
                        ok = true;
                    }
                    if($("#"+case1).children().attr('src') == undefined && ($("#"+case2).children().attr('src') == "images/pn.png" || $("#"+case2).children().attr('src') == "images/pb.png")){
                        $(this).attr('class', 'select')
                        $("#"+case1).attr('class', 'select')
                        ok = true;
                    }
                    if(($("#"+case1).children().attr('src') == "images/pn.png" || $("#"+case1).children().attr('src') == "images/pb.png") && $("#"+case2).children().attr('src') == undefined){
                        $(this).attr('class', 'select')
                        $("#"+case2).attr('class', 'select')
                        ok = true;
                    }
                    if($("#"+ case1).children().attr('src') == "images/pb.png" && $("#"+ case7).children().attr('src') == undefined){
                        $(this).attr('class', 'select')
                        $("#"+case7).attr('class', 'select')
                        ok = true;
                    }
                    if($("#"+ case2).children().attr('src') == "images/pb.png" && $("#"+ case8).children().attr('src') == undefined){
                        $(this).attr('class', 'select')
                        $("#"+case8).attr('class', 'select')
                        ok = true;
                    }
                    if(ok == false){
                        $(this).attr('class', 'error')
                    }
                }
                if($(this).children().attr('src') == 'images/pnd.png'){
                    ok1 = false;
                    ok2 = false;
                    b = b+1;
                    d = c;
                    c = c-1;
                    d = d+1;

                    if($("#c"+ b + "-l" + (c+1)).children().attr('src') == 'images/pn.png' && $("#c"+ b + "-l" + (c-1)).children().attr('src') == 'images/pn.png'){
                        $(this).attr('class', 'error');
                    }

                    while(ok1 == false || ok2 == false){
                        if(ok1 == false){
                            if($("#c"+ b + "-l" + c).children().attr('src') == undefined || $("#c"+ b + "-l" + c).children().attr('src') == 'images/pb.png'){
                                if($("#c"+ b + "-l" + c).children().attr('src') == 'images/pb.png'){
                                    c = c-1;
                                }
                                else{
                                    $("#c"+ b + "-l" + c).attr('class', 'select');
                                    c = c-1;
                                }
                            }
                            else{
                                ok1 = true;
                            }
                        }
                        if(ok2 == false){
                            if($("#c"+ b + "-l" + d).children().attr('src') == undefined || $("#c"+ b + "-l" + d).children().attr('src') == 'images/pb.png'){
                                if($("#c"+ b + "-l" + c).children().attr('src') == 'images/pb.png'){
                                    d = d+1;
                                }
                                else{
                                    $("#c"+ b + "-l" + d).attr('class', 'select');
                                    d = d+1;
                                }

                            }
                        }
                        b = b+1;
                    }
                }
            }
            if(play == "white"){
                if($(this).children().attr('src') == 'images/pb.png'){
                    if($("#"+case3).children().attr('src') == undefined && $("#"+case4).children().attr('src') == undefined){
                        $(this).attr('class', 'select')
                        $("#"+case3).attr('class', 'select')
                        $("#"+case4).attr('class', 'select')
                        ok = true;
                    }
                    if($("#"+case3).children().attr('src') == undefined && ($("#"+case4).children().attr('src') == "images/pb.png" || $("#"+case4).children().attr('src') == "images/pn.png")){
                        $(this).attr('class', 'select')
                        $("#"+case3).attr('class', 'select')
                        ok = true;
                    }
                    if(($("#"+case3).children().attr('src') == "images/pb.png" || $("#"+case3).children().attr('src') == "images/pn.png") && $("#"+case4).children().attr('src') == undefined){
                        $(this).attr('class', 'select')
                        $("#"+case4).attr('class', 'select')
                        ok = true;
                    }
                    if($("#"+ case3).children().attr('src') == "images/pn.png" && $("#"+ case5).children().attr('src') == undefined){
                        $(this).attr('class', 'select')
                        $("#"+case5).attr('class', 'select')
                        ok = true;
                    }
                    if($("#"+ case4).children().attr('src') == "images/pn.png" && $("#"+ case6).children().attr('src') == undefined){
                        $(this).attr('class', 'select')
                        $("#"+case6).attr('class', 'select')
                        ok = true;
                    }
                    if(ok == false){
                        $(this).attr('class', 'error')
                    }
                }
                if($(this).children().attr('src') == 'images/pbd.png'){
                    ok1 = false;
                    ok2 = false;
                    b = b-1;
                    d = c;
                    c = c-1;
                    d = d+1;

                    if($("#c"+ b + "-l" + (c+1)).children().attr('src') == 'images/pb.png' && $("#c"+ b + "-l" + (c-1)).children().attr('src') == 'images/pb.png'){
                        $(this).attr('class', 'error');
                    }

                    while(ok1 == false || ok2 == false){
                        if(ok1 == false){
                            if($("#c"+ b + "-l" + c).children().attr('src') == undefined || $("#c"+ b + "-l" + c).children().attr('src') == 'images/pn.png'){
                                if($("#c"+ b + "-l" + c).children().attr('src') == 'images/pn.png'){
                                    c = c-1;
                                }
                                else{
                                    $("#c"+ b + "-l" + c).attr('class', 'select');
                                    c = c-1;
                                }
                            }
                            else{
                                ok1 = true;
                            }
                        }
                        if(ok2 == false){
                            if($("#c"+ b + "-l" + d).children().attr('src') == undefined || $("#c"+ b + "-l" + d).children().attr('src') == 'images/pn.png'){
                                if($("#c"+ b + "-l" + c).children().attr('src') == 'images/pn.png'){
                                    d = d+1;
                                }
                                else{
                                    $("#c"+ b + "-l" + d).attr('class', 'select');
                                    d = d+1;
                                }

                            }
                        }
                        b = b-1;
                    }
                }
            }
        }})

.mouseout(function() {
    if(!click){
       var a = $(this).attr('id');

       if($(this).attr('class') == "select" || $(this).attr('class') == "error"){
          resnoir();
          click = false;
          ok = false;
      }
  }
})

.mouseup(function(){
    var a = $(this).attr('id');
    var b = parseInt(a.substring(2,1));
    var c = parseInt(a.substring(5,4));
    var case1 = "c"+ (b-1) + "-l" + (c-1);
    var case2 = "c"+ (b-1) + "-l" + (c+1);
    var case3 = "c"+ (b+1) + "-l" + (c-1);
    var case4 = "c"+ (b+1) + "-l" + (c+1);
    var case5 = "c"+ (b-2) + "-l" + (c-2);
    var case6 = "c"+ (b-2) + "-l" + (c+2);
    var case7 = "c"+ (b+2) + "-l" + (c-2);
    var case8 = "c"+ (b+2) + "-l" + (c+2);
    var cased = "c"+ b + "-l" + (c+2);
    var caseg = "c"+ b + "-l" + (c-2);

    if(!click){
        if($(this).attr('class') == "select"){
            $(this).attr('class', 'possible')
            click = true;
            click2 = true;
            click3 = $(this).children().attr("src");
        }
    }
    else{
        if($(this).attr('class') == 'possible'){
            resnoir()
            click = false;
        }
    }

    if(click2 == true){
        if($(this).attr('class') == "select"){
            if(click3 == "images/pn.png"){
                $(this).prepend('<img src="images/pn.png" alt="ok" width=70px height=70px>');
                if($("#" + case1).attr('class') == "possible"){
                    $("#" + case1).children().remove();
                }
                if($("#" + case2).attr('class') == "possible"){
                    $("#" + case2).children().remove();
                }
                if($("#" + case5).attr('class') == "possible"){
                    $("#" + case1).children().remove();
                    $("#" + case5).children().remove();
                    nbpionb = nbpionb - 1;
                }
                if($("#" + case6).attr('class') == "possible"){
                    $("#" + case2).children().remove();
                    $("#" + case6).children().remove();
                    nbpionb = nbpionb - 1;
                }
                if(b == 9){
                    $(this).children().remove();
                    $(this).prepend('<img src="images/pnd.png" alt="ok" width=70px height=70px>')
                }
                $('p').remove();
                $('.cadre').prepend('<p> Joueur : Blanc </p>');
                resnoir();
                click = false;
                click2 = false;
                play = "white";
                $(this).children().preventDefault;
            }

            if(click3 == "images/pb.png"){
                $(this).prepend('<img src="images/pb.png" alt="ok" width=70px height=70px>');
                if($("#" + case3).attr('class') == "possible"){
                    $("#" + case3).children().remove();
                }
                if($("#" + case4).attr('class') == "possible"){
                    $("#" + case4).children().remove();
                }
                if($("#" + case7).attr('class') == "possible"){
                    $("#" + case3).children().remove();
                    $("#" + case7).children().remove();
                    nbpionn = nbpionn - 1;
                }
                if($("#" + case8).attr('class') == "possible"){
                    $("#" + case4).children().remove();
                    $("#" + case8).children().remove();
                    nbpionn = nbpionn - 1;
                }
                if(b == 0){
                    $(this).children().remove();
                    $(this).prepend('<img src="images/pbd.png" alt="ok" width=70px height=70px>')
                }
                if(b == 9){
                    $(this).children().remove();
                    $(this).prepend('<img src="images/pnd.png" alt="ok" width=70px height=70px>')
                }
                $('p').remove();
                $('.cadre').prepend('<p> Joueur : Noir </p>');
                resnoir();
                click = false;
                click2 = false;
                play = "black";
                $(this).children().preventDefault;
            }
        }
        ok = false;
    }
})}

resnoir = function(){

 for (let n=0;n<10;n++){
    for(let b=0;b<10;b++){
        if($("#c"+ n + "-l" + b).attr("class") == "noir" || $("#c"+ n + "-l" + b).attr("class") == "select" || $("#c"+ n + "-l" + b).attr("class") == "possible" || $("#c"+ n + "-l" + b).attr("class") == "error"){
            $("#c"+ n + "-l" + b).attr("class", "noir")
        }
    }
}}