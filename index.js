module.exports = function flatmap (fn) {
  var queue = [], i
  return function (read) {
    return function again (abort, cb) {
      if(abort)        return read(abort, cb)
      if(i) return cb(null, queue[--i])
      read(null, function (err, data) {
        if(err) return cb(err)
        queue = fn(data)
        i = queue.length
        again(null, cb) //cb or read again if queue is empty.
      })
    }
  }
}
