/**
 * Created by junoa on 9/22/2016.
 */
function addLength(input){
  let i = 0;
  for (i = 0; i < input.length; i++){
    input[i] = input[i] + " " + input[i].length;
  }
  return input;
}

console.log(addLength(["apple", "pear"]));
console.log(addLength(["you", "can", "win"]));