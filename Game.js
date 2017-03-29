    var o="<table border=1>"
    var i=0;
    var tab=['r','n','b','q','k','b','n','r','p'];
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
            if(n==0)
                img = '<img src="chess/b'+tab[b]+'.gif>"';
            if(n==1)
               img = '<img src="chess/b'+tab[8]+'.gif>"';
            if(n==7)
                img = '<img src="chess/w'+tab[b]+'.gif>"';
            if(n==6)
                img = '<img onmouseover="action(this.id)" src="chess/w'+tab[8]+'.gif">';
            o=o+'<td id =c'+n+'-l'+b+' class = '+color+'>'+img+'</td>'; 
        }
        o+='</tr>'; 
    }
    
    document.getElementById('plateau').innerHTML = o;

    function action() {
        console.log(this);
    }