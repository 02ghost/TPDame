window.onload =  function(){
    var o="<table border=1>"
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
                /*if(n==4)
                    img = '<img src="" width=70px height=70px>';
                if(n==5)
                    img = '<img src="" width=70px height=70px>';*/
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
        o+='</tr>'; 
    }

    document.getElementById('plateau').innerHTML = o;

    var click=false;
    var click2=false;

    $('img')
    .mouseover(function() {
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



    .mouseup(function(){
        if(!click){
            $(this).parent().attr('class', 'possible')
            click = true;
            click2 = true;
        }
        else{
            if($(this).parent().attr('class') == 'possible'){
                $(this).parent().attr('class', 'noir')
                click = false;
            }
        }
    })

    $('td')
    .mouseup(function(){
        var a = $(this).attr('id');
        var b = parseInt(a.substring(2,1));
        var c = parseInt(a.substring(5,4));
        var case2 = "c"+ (b-1) + "-l" + (c+1);
        var case1 = "c"+ (b-1) + "-l" + (c-1);

        if(click2 == true){
            if($(this).attr('class') == "select"){
                $(this).prepend('<img src="images/pn.png" alt="ok" width=70px height=70px>');
                if($("#" + case1).attr('class') == "select"){
                    $("#" + case1).children().remove();
                }
                if($("#" + case2).attr('class') == "select"){
                    $("#" + case2).children().remove();
                }
            }
        }
    })   
};
