// Generated by BUCKLESCRIPT VERSION 5.0.0, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Os = require("os");
var Path = require("path");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function getUsername(param) {
  return Os.userInfo().username;
}

function getSublimeTextPackageDir(param) {
  var username = Os.userInfo().username;
  var match = Os.platform();
  switch (match) {
    case "darwin" : 
        return "/Users/" + (String(username) + "/Library/Application Support/Sublime Text 3/Packages/");
    case "win32" : 
        return "%APPDATA%/Roaming/Sublime Text 3/Packages/";
    default:
      return "/" + (String(username) + "/.config/sublime-text-3/Packages/");
  }
}

function createTempDir($staropt$star, param) {
  var dirName = $staropt$star !== undefined ? $staropt$star : "theme-converter";
  var dir = Path.join(Os.tmpDir(), dirName);
  return Fs.remove(dir).then((function (param) {
                  return Promise.resolve(dir);
                })).catch((function (err) {
                console.log("Couldn't remove directory!", err);
                return Promise.reject([
                            Caml_builtin_exceptions.failure,
                            "error"
                          ]);
              }));
}

exports.getUsername = getUsername;
exports.getSublimeTextPackageDir = getSublimeTextPackageDir;
exports.createTempDir = createTempDir;
/* fs Not a pure module */
