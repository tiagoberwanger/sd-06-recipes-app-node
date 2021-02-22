const { ObjectId } = require('mongodb');

const connection = require('./connection');

const getAll = async () => {
  try {
    return await connection()
      .then((db) => db.collection('recipes').find().toArray());
  } catch(e) {
    throw new Error(e);
  }
};

const findById = async (id) => {
  try {
    return await connection()
      .then((db) => db.collection('recipes').findOne(ObjectId(id)));
  } catch(e) {
    throw new Error(e);
  }
};


module.exports = {
  getAll,
  findById
};