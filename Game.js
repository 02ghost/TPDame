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
            if((n+b)%2==0){
            if(n==0)
                img = '<img src="Images/NPion.png" width=40px height=40px>';
            if(n==1)
               img = '<img src="Images/NPion.png" width=40px height=40px>';
            if(n==2)
                img = '<img src="Images/NPion.png" width=40px height=40px >';
            if(n==9)
                img = '<img src="Images/BPion.png" width=40px height=40px>';
            if(n==3)
                img = '<img src="Images/BPion.png" width=40px height=40px>';
            if(n==8)
                img = '<img src="Images/BPion.png" width=40px height=40px>';
            if(n==6)
                img = '<img src="Images/BPion.png" width=40px height=40px>';
            if(n==7)
                img = '<img src="Images/BPion.png" width=40px height=40px>';
            }
            o=o+'<td id =c'+n+'-l'+b+' class = '+color+'>'+img+'</td>'; 
        }
        o+='</tr>'; 
    }

document.getElementById('plateau').innerHTML = o;
    var click=false;
    var click2=false;
$('img')
    .mouseover(function() {
        $(this).parent().attr('class', 'select')
    })
    .mouseout(function() {
    if(!click)
        $(this).parent().attr('class', 'blanc')
    })
    .mouseup(function(){
        if(click){
        $('.possible').attr('class', 'blanc')
        $('.select').attr('class', 'blanc')
        }
        $(this).parent().attr('class', 'possible')
        $('#c1-l1').attr('class','possible')
        click=true;
    })
    /*.mousedown(function(){
        $(this).parent().attr('class', 'blanc')
        $('#c1-l1').attr('class','blanc')
    });*/
    
   };
