/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-06-28 22:25:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-06-28 22:40:33
 * @FilePath: \demo\src\message.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const vscode = require('vscode');
module.exports = vscode.commands.registerCommand('demo.helloWorld1', function () {
    vscode.window.showInformationMessage('第一个demo弹出信息!');
    vscode.window.showWarningMessage('第一个警告信息')
    vscode.window.showErrorMessage('第一个错误信息!');
});