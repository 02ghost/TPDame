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
                    img = '<img src="images/pn.png" width=70px height=70px>';
                if(n==1)
                    img = '<img src="images/pn.png" width=70px height=70px>';
                if(n==2)
                    img = '<img src="images/pn.png" width=70px height=70px >';
                if(n==3)
                    img = '<img src="images/pn.png" width=70px height=70px>';
                if(n==6)
                    img = '<img src="images/pb.png" width=70px height=70px>';
                if(n==7)
                    img = '<img src="images/pb.png" width=70px height=70px>';
                if(n==8)
                    img = '<img src="images/pb.png" width=70px height=70px>';
                if(n==9)
                    img = '<img src="images/pb.png" width=70px height=70px>';
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
        $(this).parent().attr('class', 'select')
        var a = $(this).parent().attr('id');
        var b = parseInt(a.substring(2,1));
        var c = parseInt(a.substring(5,4));
        var case2 = "c"+ (b+1) + "-l" + (c+1);
        var case1 = "c"+ (b+1) + "-l" + (c-1);
        $("#"+case1).attr('class', 'select')
        $("#"+case2).attr('class', 'select')
    })
    .mouseout(function() {
        if(!click)
            $(this).parent().attr('class', 'noir')
        var a = $(this).parent().attr('id');
        var b = parseInt(a.substring(2,1));
        var c = parseInt(a.substring(5,4));
        var case2 = "c"+ (b+1) + "-l" + (c+1);
        var case1 = "c"+ (b+1) + "-l" + (c-1);
        $("#"+case1).attr('class', 'noir')
        $("#"+case2).attr('class', 'noir')
        click = false;
    })
    .mouseup(function(){
        if(!click){
            $('.possible').attr('class', 'noir')
            $('.select').attr('class', 'noir')
        }
        $(this).parent().attr('class', 'possible')
        click=true;
    })   
};
