// "use strict";
// var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
//     if (k2 === undefined) k2 = k;
//     var desc = Object.getOwnPropertyDescriptor(m, k);
//     if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
//       desc = { enumerable: true, get: function() { return m[k]; } };
//     }
//     Object.defineProperty(o, k2, desc);
// }) : (function(o, m, k, k2) {
//     if (k2 === undefined) k2 = k;
//     o[k2] = m[k];
// }));
// var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
//     Object.defineProperty(o, "default", { enumerable: true, value: v });
// }) : function(o, v) {
//     o["default"] = v;
// });
// var __importStar = (this && this.__importStar) || function (mod) {
//     if (mod && mod.__esModule) return mod;
//     var result = {};
//     if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
//     __setModuleDefault(result, mod);
//     return result;
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// /// <reference types="node" />
// const fs = __importStar(require("fs"));
// let obj = [];
// let i = 0;
// let passwordId = 0;
// let confirmationText = document.querySelector('#incorrect-text');
// function findMatch(name, password) {
//     fs.readFile('userdata/userpass.json', (err, data) => {
//         if (err)
//             throw err;
//         obj = JSON.parse(data.toString());
//         for (i = 0; i < obj.length; i++) {
//             if (obj[i].name === name) {
//                 passwordId = i;
//                 break;
//             }
//             else {
//                 confirmationText.classList.add('active');
//                 setTimeout(() => {
//                     confirmationText.classList.remove('active');
//                 }, 400);
//             }
//         }
//         if (password === obj[i].password) {
//         }
//         else {
//             confirmationText.classList.add('active');
//             setTimeout(() => {
//                 confirmationText.classList.remove('active');
//             }, 400);
//         }
//     });
// }
