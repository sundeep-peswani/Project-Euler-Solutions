var exports =
{
    each: function _forEach(collection, callback)
    {
      for (var ii = 0; ii < collection.length; ii++)
      {
        callback(collection[ii], ii, collection);
      }
      return collection;
    }

  , isArray: function _isArray(array)
    {
      return Array.isArray(array);
    }

  , map: function _map(collection, callback)
    {
      exports.each(collection, function (item, index, collection) {
        collection[index] = callback(item, index, collection);
      });
      return collection;
    }

  , max: function _max()
    {
      return arguments.length > 1 ? exports.max(arguments) :
              !exports.isArray(arguments[0]) ? 0 :
                exports.reduce(arguments[0], function (max, item) {
                  return item > max ? item : max;
                });
    }

  , reduce: function _reduce(collection, callback, accumulator)
    {
      var result = accumulator || undefined;
      exports.each(collection, function (item, index, collection) {
        result = undefined === result ? item : callback(result, item, index, collection);
      });
      return result;
    }
};

module.exports = exports;
