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
            if(n==0)
                img = '<img src="Images/Npion.png">';
            if(n==1)
               img = '<img src="Images/Npion.png">';
            if(n==2)
                img = '<img src="Images/Npion.png">';
            if(n==10)
                img = '<img onmouseover="action(this.id)" src=""Images/Bpion.png">';
            if(n==9)
                img = '<img onmouseover="action(this.id)" src=""Images/Bpion.png">';
            if(n==8)
                img = '<img onmouseover="action(this.id)" src="Images/Bpion.png">';
            o=o+'<td id =c'+n+'-l'+b+' class = '+color+'>'+img+'</td>'; 
        }
        o+='</tr>'; 
    }
    
    document.getElementById('plateau').innerHTML = o;

    function action() {
        console.log(this);
    }