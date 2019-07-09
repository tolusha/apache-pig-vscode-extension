// The module 'vscode' contains the VS Code extsensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from 'path';
import * as vscode from 'vscode';
import { DebugConfigurationProvider, PIG_DEBUG } from './debug-configuration-provider';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('pig.adapterExecutable', () => provideDebugAdapterExecutable()));
	vscode.debug.registerDebugConfigurationProvider(PIG_DEBUG, new DebugConfigurationProvider());
}

function provideDebugAdapterExecutable(): any {
	return {
		command: 'java',
		args: ['-jar', path.join(__dirname, '../adapter/pig-debug.jar')]
	}
}


// this method is called when your extension is deactivated
export function deactivate() { }
