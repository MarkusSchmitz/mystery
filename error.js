var failed = false;
function repairTimeCrystals(){
    document.getElementById("output").innerHTML = "";
    console.log("running repair");
    failed = false;
    let run = async ()=>{
        moduleA();
        await checkProgress();
        moduleB();
        await checkProgress();
        moduleC();
        await checkProgress();
        moduleD();
        await checkProgress();
        moduleE();
        await checkProgress();
        initiateTimeDecoder();
      }
      run();

}
    
//%%%%%%%%%%%%%%%%%%%%%%%%%%%% Module A %%%%%%%%%%%%%%%%%%%%%%%%%%%%
function moduleA(){
    /*
    Finds the position of the smallest value in an array
    */
    if (!failed){    
        try {


            function smallest(arr){
                var value = Math.min.apply(Math, arr);
                var pos = arr.indexOf(value);
                return pos;
            }

            res = smallest([2645,42352,7467,3824,2346,1723,1653,17487,23435,1835,7245,2452]);

            console.log(initModuleA(res));
        
    }
    // Catch errors and abort time crystal repair
    catch (e) {
        console.log(e);
        document.getElementById("output").innerHTML += "ModuleA failed to boot. Please remove errors and retry.\n";
        failed = true;
        }
    }   

}




//%%%%%%%%%%%%%%%%%%%%%%%%%%%% Module B %%%%%%%%%%%%%%%%%%%%%%%%%%%%
function moduleB(){
    /*
    Reverses the integer 5897248
    */
    if (!failed){    
        try {

            function reversedNum(num) {
                
                    num = num.toString()
                    num = num.split('')
                    num = num.reverse()
                    num = num.join('')
                    parseFloat(num) * Math.sign(num)
                    
                    return num
              }

            res = reversedNum(5897248)
        
            console.log(initModuleB(res));

    }
    // Catch errors and abort time crystal repair
    catch (e) {
        console.log(e);
        document.getElementById("output").innerHTML += "ModuleB failed to boot. Please remove errors and retry.";
        failed = true;
    }
}   

}




//%%%%%%%%%%%%%%%%%%%%%%%%%%%% Module C %%%%%%%%%%%%%%%%%%%%%%%%%%%%
function moduleC(){
    /*
    Sorts a list of strings by number of characters
    */
    if (!failed){    
        try {

            function sortStrings(arr) {
                arr = arr.sort((a,b) => a.length - b.length);
                return arr
            }

            res = sortStrings(["Storage room", "inside the", "Search", "the key"]);

            console.log(initModuleC(res));
        
        }

    // Catch errors and abort time crystal repair
    catch (e) {
        console.log(e);
        document.getElementById("output").innerHTML += "ModuleC failed to boot. Please remove errors and retry.";
        failed = true;
    }
}   

}




//%%%%%%%%%%%%%%%%%%%%%%%%%%%% Module D %%%%%%%%%%%%%%%%%%%%%%%%%%%%
function moduleD(){
    /*
    Returns all primary numbers up to 17
    */
    if (!failed){ 
        
        try{

            function primeFactorsTo(max){

                var store  = [], i, j, primes = [];
                for (i = 2; i <= max; ++i) 
                {
                    if (!store [i]) 
                    {
                        primes.push(i);
                        for (j = i << 1; j <= max; j += i) 
                        {
                            store[j] = true;
                        }
                    }
                }
                return primes;
            }


            res = primeFactorsTo(17)
        
            console.log(initModuleD(res));
        

    }

    // Catch errors and abort time crystal repair
    catch (e) {
        console.log(e);
        document.getElementById("output").innerHTML += "ModuleD failed to boot. Please remove errors and retry.\n";
    
        failed = true;
    }
}   

}




//%%%%%%%%%%%%%%%%%%%%%%%%%%%% Module E %%%%%%%%%%%%%%%%%%%%%%%%%%%%
function moduleE(){
    /*
    Return the 42nd number in the fibonacci sequence
    */
    if (!failed){    
        try {

            function fibonacci(n){
                if (n == 1) {
                    return 1;
                } else if (n == 0) {
                    return 0;
                } else {
                    return fibonacci(n - 1) + fibonacci(n - 2);
                }
            }

            res = fibonacci(42);

            console.log(initModuleE(res));

    }

    // Catch errors and abort time crystal repair
    catch (e) {
        console.log(e);
        document.getElementById("output").innerHTML += "ModuleE failed to boot. Please remove errors and retry.\n";
    
        failed = true;
    }
}   

}



