function combineUsers(...args) {
  const combinedObject = {
    users: []
  };
  for (let arr of args) {
    combinedObject.users.push(...args)
  }
  combinedObject.merge_date = Date.today().toString('d/M/yyyy');

  return combinedObject
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};