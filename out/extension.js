"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const path = require("path");
const vscode = require("vscode");
const debug_configuration_provider_1 = require("./debug-configuration-provider");
function activate(context) {
    vscode.commands.registerCommand('pig.adapterExecutable', () => provideDebugAdapterExecutable());
    vscode.debug.registerDebugConfigurationProvider(debug_configuration_provider_1.PIG_DEBUG, new debug_configuration_provider_1.DebugConfigurationProvider());
}
exports.activate = activate;
function provideDebugAdapterExecutable() {
    return {
        command: 'java',
        args: ['-jar', path.join(__dirname, '../adapter/pig-debug.jar')]
    };
}
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map