




function error(msg) {
  throw new Error(msg);
}
function warn(msg) {
  console.log(["Warning: ", msg].join(' '));
}
function info(msg) {
  console.log(["Note: ", msg].join(' '));
}
function success(msg) {
  console.log(["Success: ", msg].join(' '));
}

var log = module.exports = {};