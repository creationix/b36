const convertBase = require('bigint-base-converter')
const BASE36 = '0123456789abcdefghijklmnopqrstuvwxyz'

exports.encode = encode
function encode (buf) {
  return convertBase([].slice.call(buf), 256, BASE36)
}

exports.decode = decode
function decode (str) {
  return Buffer.from(convertBase(str, BASE36, 256))
}
