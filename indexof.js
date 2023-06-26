function mutation(arr) {
  let secondelem = arr[1].toLowerCase();
  let firstelem = arr[0].toLowerCase();

  for(let i=0; i<secondelem.length;i++){
    if(firstelem.indexOf(secondelem[i])<0)
      return false;
    }
      return true;
    }
  
  

mutation(["hello", "hey"]);
