/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-06-28 22:25:29
 * @LastEditors: z007pig 413782924@qq.com
 * @LastEditTime: 2023-07-06 22:09:26
 * @FilePath: \demo\src\message.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const vscode = require('vscode');
module.exports = vscode.commands.registerCommand('demo.webview', function () {
    // 创建并显示一个新的webview
    const panel = vscode.window.createWebviewPanel(
        'Test', // 标识webview的类型
        'json转换', // 展示给用户的面板的标题
        vscode.ViewColumn.One, // 显示webview面板以编辑器新列的方式.
        {enableScripts: true} // webview其他的选项
    );
    panel.webview.html = getWebviewContent();
    function getWebviewContent() {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cat Coding</title>
        </head>
        <body>
           <div><textarea id ="a1"></textarea></div>
           <div id="a2">转换<div>
        </body>
        <script>
        document.getElementById("a2").onclick = function(){
            console.log(2);
            let value =  docume
            nt.getElementById("a1").value;
            console.log(value);
        }
        </script>
        </html>`;
    }
});