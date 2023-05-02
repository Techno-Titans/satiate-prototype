"use strict";
// /// <reference types="node" />
// import * as fs from 'fs';
// let obj: { name: string; password: string; }[] = [];
// let i: number = 0
// let passwordId: number = 0
// let confirmationText = document.querySelector('#incorrect-text') as HTMLParagraphElement;
// function findMatch(name: string, password: string): void {
//     fs.readFile('userdata/userpass.json', (err: NodeJS.ErrnoException | null, data: Buffer) => {
//         if (err) throw err;
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
