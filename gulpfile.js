const { src, dest } = require("gulp");

function mytask(callback) {
    // task body
    callback();
 }
 
 exports.mytask = mytask;