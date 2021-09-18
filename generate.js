var upper=  ['X','W','V','U','T','S']
var upper2= ['R','Q','P','O','N','M','L','K','Z','Y']
var upper3= ['J','I','H','G','F','E','D','C','B','A'] 
var lower=  ["a","b","c","d","e","f"]
var lower2= ["i","j","k","l","m","n","o","p","g","h"]
var lower3= ["q","r","s","t","u","v","w","x","y","z"]
var num=    ["1","2","3","4","5","6","7","8","9","0",".1"]  
var special=[".","=","(","/","?","$","&","^","{","#","%"]
var m=4


function out(){
    val=document.getElementById('customRange2').value;
    document.getElementById("data").value=val;
    

    if (m<0){
        m=3
    }
    for(limit=1;limit<2;limit++){
        if (val<=7){   
            
            var x=lower[m]+upper[m]  
            var final=x+special[val]+num[val]+special[val]+upper2[val]+lower2[val]+num[val]
            
            temp=special[val]
            special[val]=special[m]
            special[m]=temp

            temp=num[val]
            num[val]=num[m]
            num[m]=temp

            temp=upper2[val]
            upper2[val]=upper2[m]
            upper2[m]=temp

            temp=lower2[val]
            lower2[val]=lower2[m]
            lower2[m]=temp
            
            m=m-1
        }
        else{

            var x=lower[m]+upper[m]  
            var final=x+special[val-1]+num[val-1]+special[val-1]+upper2[val-1]+lower2[val-1]+num[val-1]+upper2[val-1]+lower2[val-1]
            
            temp=special[val]
            special[val]=special[m]
            special[m]=temp

            temp=num[val]
            num[val]=num[m]
            num[m]=temp

            temp=upper2[val]
            upper2[val]=upper2[m]
            upper2[m]=temp

            temp=lower2[val]
            lower2[val]=lower2[m]
            lower2[m]=temp

            temp=lower[val]
            lower[val]=lower[m]
            lower2[m]=temp

            temp=upper[val]
            upper[val]=upper[m]
            upper[m]=temp

            m=m-1         
        }
    }
    var password=""
    console.log(final)
    
    for(a=0;a<val;a++){
         password=password+final[a]

    }
    document.getElementById("give").value=password
   
}
