// importing datejs
var require = ("datejs")

function combineUsers(...args) {
  // the return object
  const combinedObject = {
    users: []
  }

  // looping all arrays and merging 
  args.forEach(array => {
    combinedObject.users.push(...array)
  })
//add todayss date in format M/d/yyy
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};