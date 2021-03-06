
module.exports = function(SwaggerModel) {

/**
 * Returns all pets from the system that the user has access to
 * @param {string[]} tags tags to filter by
 * @param {number} limit maximum number of results to return
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Pet} result Result object
 */
SwaggerModel.findPets = function(tags, limit, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('unexpected error');
  err0.statusCode = default;
  return cb(err0);
  */ 
}


/**
 * Creates a new pet in the store.  Duplicates are allowed
 * @param {NewPet} pet Pet to add to the store
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Pet} result Result object
 */
SwaggerModel.addPet = function(pet, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('unexpected error');
  err0.statusCode = default;
  return cb(err0);
  */ 
}


/**
 * Returns a user based on a single ID, if the user does not have access to the pet
 * @param {number} id ID of pet to fetch
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Pet} result Result object
 */
SwaggerModel.findPetById = function(id, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('unexpected error');
  err0.statusCode = default;
  return cb(err0);
  */ 
}


/**
 * deletes a single pet based on the ID supplied
 * @param {number} id ID of pet to delete
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
SwaggerModel.deletePet = function(id, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('unexpected error');
  err0.statusCode = default;
  return cb(err0);
  */ 
}


/**
 * Update a pet based on a single ID
 * @param {NewPet} pet Pet to update to the store
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Pet} result Result object
 */
SwaggerModel.updatePetById = function(pet, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('unexpected error');
  err0.statusCode = default;
  return cb(err0);
  */ 
}




SwaggerModel.remoteMethod('findPets',
  { isStatic: true,
  produces: [ 'application/json', 'application/xml', 'text/xml', 'text/html' ],
  accepts: 
   [ { arg: 'tags',
       type: [ 'string' ],
       description: 'tags to filter by',
       required: false,
       http: { source: 'query' } },
     { arg: 'limit',
       type: 'number',
       description: 'maximum number of results to return',
       required: false,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'pet response',
       type: [ 'Pet' ],
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/pets' },
  description: 'Returns all pets from the system that the user has access to' }
);

SwaggerModel.remoteMethod('addPet',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'pet',
       type: 'NewPet',
       description: 'Pet to add to the store',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'pet response',
       type: 'Pet',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/pets' },
  description: 'Creates a new pet in the store.  Duplicates are allowed' }
);

SwaggerModel.remoteMethod('findPetById',
  { isStatic: true,
  produces: [ 'application/json', 'application/xml', 'text/xml', 'text/html' ],
  accepts: 
   [ { arg: 'id',
       type: 'number',
       description: 'ID of pet to fetch',
       required: true,
       http: { source: 'path' } } ],
  returns: 
   [ { description: 'pet response',
       type: 'Pet',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/pets/:id' },
  description: 'Returns a user based on a single ID, if the user does not have access to the pet' }
);

SwaggerModel.remoteMethod('deletePet',
  { isStatic: true,
  accepts: 
   [ { arg: 'id',
       type: 'number',
       description: 'ID of pet to delete',
       required: true,
       http: { source: 'path' } } ],
  returns: [],
  http: { verb: 'delete', path: '/pets/:id' },
  description: 'deletes a single pet based on the ID supplied' }
);

SwaggerModel.remoteMethod('updatePetById',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'pet',
       type: 'NewPet',
       description: 'Pet to update to the store',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'pet response',
       type: 'Pet',
       arg: 'data',
       root: true } ],
  http: { verb: 'put', path: '/pets/:id' },
  description: 'Update a pet based on a single ID' }
);

}
