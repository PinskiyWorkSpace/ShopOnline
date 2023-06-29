import{banerTitle,timerTitle,createWrapper,createDay,createHours,createMinutes,createSeconds}from"./create.js";export const render=e=>{const r=banerTitle(),t=createWrapper(),a=timerTitle(),c=createDay(),n=createHours(),p=createMinutes(),i=createSeconds();return t.append(c,n,p,i),e.append(r,a,t),e};
//# sourceMappingURL=../maps/render.js.map
