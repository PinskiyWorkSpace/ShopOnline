"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;
var _create = require("./create.js");
var render = function render(timer) {
  var baner = (0, _create.banerTitle)();
  var wrapper = (0, _create.createWrapper)();
  var title = (0, _create.timerTitle)();
  var day = (0, _create.createDay)();
  var hour = (0, _create.createHours)();
  var minute = (0, _create.createMinutes)();
  var second = (0, _create.createSeconds)();
  wrapper.append(day, hour, minute, second);
  timer.append(baner, title, wrapper);
  return timer;
};
exports.render = render;
//# sourceMappingURL=../maps/render.js.map
