# b36

Simple utility for converting between base36 strings and buffers

Base36 is slightly more compact than hex encoding, but is still safe to use
for things like hostnames.

# Encoding

```js
const { encode } = require('b36')
let key = require('crypto').randomBytes(32)

console.log(encode(key))
// Sample output:
//   2jn5z3wzqnt6adgw7dwo98krsz6pku9cckb0cizs34pv025lpf
```

# Decoding

```js
const { decode } = require('b36')
let str = '2jn5z3wzqnt6adgw7dwo98krsz6pku9cckb0cizs34pv025lpf'
console.log(decode(str))
// Sample output:
// <Buffer 66 23 0d 7c 73 64 81 7f 1b 64 73 c8 24 f9 e4 2e 6b f8 bd 5b d6 3f 55 8e 62 8d db 9d 60 fe 6f 23>
```
