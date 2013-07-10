#!/usr/bin/env node

var findprimes = function(k){
    var arr = [];
    for(i=2;i<k+1;i++){
        arr[i] = true;        
    }
//    console.log(arr.join(" "));

    for(i=2;i<=Math.sqrt(k);i++){
        if(arr[i] == true){
            for (j=Math.pow(i,2);j<=k;j=j+i)
                arr[j]=false;		
        }
    }
//    console.log(arr.join("|"));
    return arr;
};

var fmtprimes = function(arr){
    var primes = [];
    for (var i in arr){
        if (arr[i] == true){
            primes.push(i);
        }
    }
    return primes.join(" ")+"\n";
}

//console.log(fmtprimes(findprimes(30)));

var fs = require('fs');
var outfile = "part2.txt";

fs.writeFileSync(outfile,fmtprimes(findprimes(100)));
