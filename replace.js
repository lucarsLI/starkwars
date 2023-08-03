const fs = require('fs');
const path = require('path');

function traverseDirectory(directoryPath) {
    const filesArray = [];

    // 同步读取目录中的所有文件和子目录
    const files = fs.readdirSync(directoryPath);

    // 遍历目录中的每个文件和子目录
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);

        // 检查文件状态
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // 如果是子目录，则递归遍历
            const nestedFiles = traverseDirectory(filePath);
            filesArray.push(...nestedFiles);
        } else {
            // 如果是文件且扩展名为.json，则将其路径添加到数组中
            if (path.extname(filePath) === '.json') {
                filesArray.push(filePath);
            }
        }
    });

    return filesArray;
}

// 用法示例
const directoryPath = './json';
const jsonFiles = traverseDirectory(directoryPath);
// console.log(jsonFiles);

for (let i = 0; i < jsonFiles.length; i++) {
    let jsonFile = jsonFiles[i];
    let obj = JSON.parse(fs.readFileSync(jsonFile));
    // console.log(obj);
    obj.image = obj.image.replace("www.starkwars.xyz/metadata", "lucarsli.github.io/starkwars")
    // console.log(obj)
    obj.external_url = 'https://www.starkwars.org'
    fs.writeFileSync(jsonFile, JSON.stringify(obj));
}