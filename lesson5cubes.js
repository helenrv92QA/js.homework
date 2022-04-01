let win1;
let win2;
let i = 0;
 
       do {
        win1 = Math.floor(Math.random() * 6); 
        win2 = Math.floor(Math.random() * 6); 
        console.log(win1,win2)
        i++;
      }
      while (i < 3);  

      

if(win1 > win2){
    console.log ("win 1 won")}
    else if (win1 < win2)
     {console.log ("win2 won")}
    else {console.log ("Lena won")}
