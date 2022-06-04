// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph){
 cats.push("Ralph")
 return cats
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
    return cats
   }
   function destructivelyRemoveLastCat(Bob){
    cats.pop()
    return cats
   }
   function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
   }
   function appendCat(name) {
     return [...cats,name]
      }

      function prependCat(name) {
        return [name, ...cats]
         }

         function removeLastCat() {
            return cats.slice(0,cats.length-1);
             }

             function removeFirstCat() {
                return cats.slice(1);
                 }
  