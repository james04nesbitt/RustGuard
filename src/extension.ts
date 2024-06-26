// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('rustguard.transform', () => {
		const editor = vscode.window.activeTextEditor;
		if(!editor){
			vscode.window.showInformationMessage("No file selected to Transform.");
			return;
		}
		const selection = editor.selection;

		const code = editor.document.getText(selection);
		
		
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
