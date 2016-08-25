# pull-flatmap

flatmap for pull-streams

taken from example on [introduction to pull-streams](http://dominictarr.com/post/149248845122/pull-streams-pull-streams-are-a-very-simple)

## example

``` js
var pull = require('pull-stream')
pull(
  pull.values([1,2,3]),
  flatmap(function (n) {
    return new Array(n).map(function () { return n })
  }),
  pull.collect(function (err, ary) {
    if(err) throw err
    console.log(ary)
  })
)
```
output:
```
[[1], [2,2], [3,3,3]]
```

## License

MIT
