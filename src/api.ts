const vscode = require('vscode');

async function storeApiKey(apiKey: string) {
    const secretStorage = vscode.workspace.getConfiguration().get('myExtension');
    await secretStorage.store('apiKey', apiKey);
}

export async function getApiKey() {
    const secretStorage = vscode.workspace.getConfiguration().get('myExtension');
    const apiKey = await secretStorage.get('apiKey');
    return apiKey;
}
