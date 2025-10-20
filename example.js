javascript: (function () {
    var pagePath = mx.ui.getContentForm().path;
    var path = pagePath.split("/");
    var moduleName = path[0];
    var documentName = path[1].split(".")[0];
    var output = "Module: " + moduleName + "\nDocument: " + documentName;
    prompt(output + "\n\nCopy document name to clipboard: Ctrl+C", documentName);
    console.log(output);
}())