function mutation(arr) {
  let secondelem = arr[1].toLowerCase();
  let firstelem = arr[0].toLowerCase();

  //Here we convert the strings to lowercase first for uniformity.

  for(let i=0; i<secondelem.length;i++){
    if(firstelem.indexOf(secondelem[i])<0)
      return false;
    }
      return true;
    }
  
  //The we iterate throught the second string, if any of them is not found we return false.

//If they are all found, the loop will finish without returning anything and we get to return true.

mutation(["hello", "hey"]);
