"use strict";
var u;
(function (u) {
    u["a"] = "sdff";
    u["b"] = "sdf";
    u[u["c"] = 324] = "c";
})(u || (u = {}));
// u.a = 'sdf';
console.log(u);
