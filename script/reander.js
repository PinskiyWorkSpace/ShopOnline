import {
  banerTitle,
  timerTitle,
  createWrapper,
  createDay,
  createHours,
  createMinutes,
  createSeconds
} from "./create.js";

export const reander = (timer) => {
  const baner = banerTitle();

  const wrapper = createWrapper();
  const title = timerTitle();
  const day = createDay();
  const hour = createHours();
  const minute = createMinutes();
  const second = createSeconds();

  wrapper.append(day, hour, minute, second);
  timer.append(baner, title, wrapper);
  return timer;
};
