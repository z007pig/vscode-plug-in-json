/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-06-28 22:25:29
 * @LastEditors: z007pig 413782924@qq.com
 * @LastEditTime: 2023-07-06 22:05:49
 * @FilePath: \demo\src\message.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const vscode = require('vscode');
module.exports = vscode.commands.registerCommand("demo.navigation", function () {
    let GoToHelp = 'Go to Help';
    vscode.window.showInformationMessage('Click for more Info', GoToHelp)
    .then(selection => {
        if (selection === GoToHelp) {
            vscode.env.openExternal(vscode.Uri.parse(
                'https://www.merriam-webster.com/dictionary/hep'));
        }
    })
});