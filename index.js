var require = ("datejs")

function combineUsers(...args) {
  const combinedObject = {
    users: []
  }
  args.forEach(array => {
    combinedObject.users.push(...array)
  })

  combinedObject.merge_date = Date.today().toString('d/M/yyyy');

  return combinedObject
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};