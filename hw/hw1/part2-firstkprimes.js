#!/usr/bin/env node

var isprime = function(n){
    var i = 2;
    for (i=2;i<=Math.sqrt(n);i++){
        if (n%i == 0){
            return false;
        }
    }
    return true;
};

var findkprimes = function(k){
    var count = 0;
    var i = 2;
    var primes = [];
    for (i=2; i<Number.MAX_VALUE; i++){
	if (isprime(i)== true){
            count++;
            console.log("Prime [" + i + "] is found, Couting at ["+ count +"]\n");
            primes.push(i);
        }

        if (count == k){
            break;
        }
    }
    return primes;
};

var fmtprimes = function(arr){
    return arr.join(",")+"\n";
};

var fs = require('fs');
var outfile = "part2.txt";
var k = 100;
fs.writeFileSync(outfile,fmtprimes(findkprimes(k)));
