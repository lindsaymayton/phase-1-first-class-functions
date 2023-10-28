function receivesAFunction(callback) {
    console.log("Inside receivesAFunction");
  
    
    callback();
  }
  
  function rockOn() {
    console.log("Rocker style");
  }
  
  
  receivesAFunction(rockOn);

  function returnsANamedFunction() {
    return function metalRules() {
      
    };
  }
  
  const result = returnsANamedFunction();
  
  console.log(typeof result);
  console.log(result.name); 
  
  function returnsAnAnonymousFunction() {
    return function() { 
    };
  }
  
  const fn = returnsAnAnonymousFunction();
  
  console.log(typeof fn);
  console.log(fn.name); 