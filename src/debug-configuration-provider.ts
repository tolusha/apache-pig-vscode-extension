import * as vscode from 'vscode';

export const PIG_DEBUG = 'pig-debug';

export class DebugConfigurationProvider implements vscode.DebugConfigurationProvider {
    async resolveDebugConfiguration(
        folder: vscode.WorkspaceFolder | undefined,
        debugConfiguration: vscode.DebugConfiguration,
        token?: vscode.CancellationToken): Promise<vscode.DebugConfiguration> {

        // overrides configuration property to be sure that debuggers stops at the very fist line
        debugConfiguration.request = 'launch';
        debugConfiguration.stopOnEntry = true;

        return debugConfiguration;
    }
}
