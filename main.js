window.onload =  function(){
    var o="<div class='begin'> <table border=1>"
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

            o=o+'<td id= c'+n+'-l'+b+' class = '+color+'>'+img+'</td>'; 
        }
        o+='</tr></div>'; 
    }

    document.getElementById('plateau').innerHTML = o;
    $("td").preventDefault;

    update();
};

res = function(){
    var o="<div class='begin'> <table border=1>"
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

            o=o+'<td id= c'+n+'-l'+b+' class = '+color+'>'+img+'</td>'; 
        }
        o+='</tr></div>'; 
    }
    $(".plat").replaceWith(o);

    update();
}


update = function(){
    var click=false;
    var click2=false;
    var click3;
    var ok = true;

    $('img')
    .mouseover(function(e) {
        var a = $(this).parent().attr('id');
        var b = parseInt(a.substring(2,1));
        var c = parseInt(a.substring(5,4));
        var case2 = "c"+ (b+1) + "-l" + (c+1);
        var case1 = "c"+ (b+1) + "-l" + (c-1);
        var case4 = "c"+ (b-1) + "-l" + (c+1);
        var case3 = "c"+ (b-1) + "-l" + (c-1);
        if(!click){
            if($(this).attr('src') == 'images/pn.png'){
                if($("#"+case1).children().attr('src') == undefined && $("#"+case2).children().attr('src') == undefined){
                    $(this).parent().attr('class', 'select')
                    $("#"+case1).attr('class', 'select')
                    $("#"+case2).attr('class', 'select')
                }
                else if($("#"+case1).children().attr('src') == undefined && $("#"+case2).children().attr('src') == "images/pn.png"){
                    $(this).parent().attr('class', 'select')
                    $("#"+case1).attr('class', 'select')
                }
                else if($("#"+case1).children().attr('src') == "images/pn.png" && $("#"+case2).children().attr('src') == undefined){
                    $(this).parent().attr('class', 'select')
                    $("#"+case2).attr('class', 'select')
                }
                else{
                    $(this).parent().attr('class', 'error')
                }
            }

            if($(this).attr('src') == 'images/pb.png'){
                if($("#"+case3).children().attr('src') == undefined && $("#"+case4).children().attr('src') == undefined){
                    $(this).parent().attr('class', 'select')
                    $("#"+case3).attr('class', 'select')
                    $("#"+case4).attr('class', 'select')
                }
                else if($("#"+case3).children().attr('src') == undefined && $("#"+case4).children().attr('src') == "images/pb.png"){
                    $(this).parent().attr('class', 'select')
                    $("#"+case3).attr('class', 'select')
                }
                else if($("#"+case3).children().attr('src') == "images/pb.png" && $("#"+case4).children().attr('src') == undefined){
                    $(this).parent().attr('class', 'select')
                    $("#"+case4).attr('class', 'select')
                }
                else{
                    $(this).parent().attr('class', 'error')
                }
            }
        }})

    .mouseout(function() {
        if(!click){
           var a = $(this).parent().attr('id');
           var b = parseInt(a.substring(2,1));
           var c = parseInt(a.substring(5,4));
           var case2 = "c"+ (b+1) + "-l" + (c+1);
           var case1 = "c"+ (b+1) + "-l" + (c-1);
           var case4 = "c"+ (b-1) + "-l" + (c+1);
           var case3 = "c"+ (b-1) + "-l" + (c-1);

           $(this).parent().attr('class', 'noir')
           $("#"+case1).attr('class', 'noir')
           $("#"+case2).attr('class', 'noir')
           $("#"+case3).attr('class', 'noir')
           $("#"+case4).attr('class', 'noir')
           click = false;
       }
   })

    $('td')
    .mouseup(function(e){
        var a = $(this).attr('id');
        var b = parseInt(a.substring(2,1));
        var c = parseInt(a.substring(5,4));
        var case2 = "c"+ (b-1) + "-l" + (c+1);
        var case1 = "c"+ (b-1) + "-l" + (c-1);
        var case4 = "c"+ (b+1) + "-l" + (c+1);
        var case3 = "c"+ (b+1) + "-l" + (c-1);
        var cased = "c"+ b + "-l" + (c+2);
        var caseg = "c"+ b + "-l" + (c-2);

        if(!click){
            $(this).attr('class', 'possible')
            click = true;
            click2 = true;
            click3 = $(this).children().attr("src");
        }
        else{
            if($(this).attr('class') == 'possible'){
                $(this).attr('class', 'noir')
                click = false;
            }
        }

        if(click2 == true){
            if($(this).attr('class') == "select"){
                if(click3 == "images/pn.png"){
                    $(this).prepend('<img src="images/pn.png" alt="ok" width=70px height=70px>');
                    $(this).attr("class", "noir")
                    if($("#" + case1).attr('class') == "possible"){
                        $("#" + case1).children().remove();
                        $("#" + case1).attr("class", "noir")
                        $("#" + cased).attr("class", "noir")
                        $("#" + caseg).attr("class", "noir")
                        click = false;
                        click2 = false;
                    }
                    else{
                       $("#" + case2).children().remove();
                       $("#" + case2).attr("class", "noir")
                       $("#" + cased).attr("class", "noir")
                       $("#" + caseg).attr("class", "noir")
                       click = false;
                       click2 = false;
                   }
                   $(this).children().preventDefault;
                   update();
               }

               if(click3 == "images/pb.png"){
                $(this).prepend('<img src="images/pb.png" alt="ok" width=70px height=70px>');
                $(this).attr("class", "noir")
                if($("#" + case2).attr('class') == "possible"){
                    $("#" + case4).children().remove();
                    $("#" + case4).attr("class", "noir")
                    $("#" + cased).attr("class", "noir")
                    $("#" + caseg).attr("class", "noir")
                    click = false;
                    click2 = false;
                }
                else{
                    $("#" + case4).children().remove();
                    $("#" + case4).attr("class", "noir")
                    $("#" + cased).attr("class", "noir")
                    $("#" + caseg).attr("class", "noir")
                    click = false;
                    click2 = false;
                }
                $(this).children().preventDefault;
                update();
            }
        }
    }
}) 

    
}
