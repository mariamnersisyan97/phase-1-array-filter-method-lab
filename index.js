const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, string) {
    let result = drivers.filter(element => element === string || element === string.toLowerCase())
return result; 
}
//findMatching - takes array of drivers, and a string as arguments, returns the matching list of drivers

// function fuzzyMatch(drivers, string){
//     let firstLetter = drivers.filter(element => element === string || element ===string.startsWith("Sa"));
//     return firstLetter;
// }

function fuzzyMatch(drivers, string){
    let result = drivers.filter(element => element.startsWith(string))
    return result;
}
//fuzzyMatch - takes array of drivers, and a string as arguments for querying the array, and returns all drivers whose names begin with provided letters


//matchName = takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(drivers, string){
    let hometown = drivers.filter(element => element.name === string)
    return hometown;
};
