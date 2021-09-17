function out(){
    var val=4
   
    var  upper=['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'] 
    var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var num=["1","2","3","4","5","6","7","8","9","0"]  
    var special=[".","=","(","/","?","$","#","&","^","{","}","[","]"]
     

    for(limit=1;limit<4;limit++)
    {
        var final=special[val]+upper[val]+lower[val]+num[val]
    }
    var password=""
    
    for(a=0;a<val;a++){
         password=password+final[a]
    }
    document.getElementById("give").value=password
    
 

    

    

    
}
