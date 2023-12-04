import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    SportReminder(context);
}

function SportReminder(context: vscode.ExtensionContext) {
    const now = new Date();
    const aim = new Date();
    aim.setHours(21, 0, 0, 0);
    if (now > aim) {
        aim.setDate(aim.getDate() + 1);
    }
    const waitingTime = aim.getTime() - now.getTime();
    const timeout = setTimeout(() => {
        vscode.window.showInformationMessage("It's TIME to do some sport!");
        const youtubepath = vscode.Uri.parse('https://www.youtube.com/watch?v=y84jSVzPaRo');
        vscode.env.openExternal(youtubepath);
    }, waitingTime);

    context.subscriptions.push({ dispose: () => clearTimeout(timeout) });
}

export function deactivate() {}
