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
            if(n==8)
                img = '<img src="Images/BPion.png" width=40px height=40px>';
            if(n==7)
                img = '<src="Images/BPion.png" width=40px height=40px>';
            }
            o=o+'<td id =c'+n+'-l'+b+' class = '+color+'>'+img+'</td>'; 
        }
        o+='</tr>'; 
    }

document.getElementById('plateau').innerHTML = o;
    
$('img')
    .mouseover(function() {
console.log("Selection");
})
.mouseout(function() {
console.log("Deselection");
});
    
   };
