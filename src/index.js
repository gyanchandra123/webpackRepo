import { run } from "./app/app.js";
import  "./main.scss";
 

import { AlertService } from "./app/alert.service.js";
import { ComponentService } from "./app/component.service.js";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
console.log("running from the index.js");

alert("hello from the index.js ");
console.log("running from the index.js----2");

console.log("running from the index.js----3");
console.log("running from the index.js----3");
console.log("running from the index.js----3");
console.log("running from the index.js----3");
console.log("running from the index.js----3");
console.log("running from the index.js----3");
console.log("running from the index.js----2");
 
 

