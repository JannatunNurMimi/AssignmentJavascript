//feetToMile
function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}
  var result = feetToMile(3000);
    console.log(result);

    //woodCalculator

    function woodCalculator(bed, chair, table){
        var bedcount =bed*1 ;
        var chaircount = chair*10; 
         var tablecount= table*2;
         var result= bedcount+ chaircount+ tablecount;
        return result;
    }
    var totalWood=woodCalculator(5, 1, 3);
    console.log(totalWood);

    //brickCalculator

    function brickCalculator(num){
        let i,sum,need,sum1=0,sum2=0,sum3=0;
        for(i=1; i<=num; i++){
        if(i>0 && i<=10){
              sum1=sum1+1;
        }
       else if(i>10 && i<=20){
            sum2=sum2+1;
       }
     else{
         sum3=sum3+1;
     }
    }   sum=sum1*15+sum2*12+sum3*10;
       need=sum*1000;
       return need;
    }
    var totalbrick=brickCalculator(10);
    console.log(totalbrick);

    //tinyFriend

    function tinyFriend(friends){
        var smallname = friends[0];
        for ( var i = 0 ; i > friends.length; i++)
        {
        var element = friends[i];
        if(element>smallname){
            smallname = element;
         }
        }
        return smallname;
        }
        var result = tinyFriend ( ['Johir','Farhan','Nobantica'] );
        console.log(result);