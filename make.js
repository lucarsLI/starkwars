let fs = require('fs')

let template = {
    "description": "Elvin's home planet civilization has a pure spirit and form, so his home planet was selected as the last pure land of the universe. But in the billions of years of his sleep, his mother civilization has long since perished, so he is saddened and angry about the failure to revive his mother civilization! In the end, he was forever separated from the outside world. In the endless reincarnation, he could only look at the development of the universe as a bystander. Over time, he had a grudge against the universe...",
    "external_url": "http://www.starkwars.org/",
    "image": "http://www.starkwars.xyz/",
    "name": "WAR #",
    "attributes": []
}

// for (let i = 40000; i < 81000; i++) {
//     let token_id = 100000000 + i;
//     let obj = JSON.parse(JSON.stringify(template))
//     obj.image = "https://lucarsli.github.io/starkwars/images/0/" + Math.floor(Math.random() * 15) + ".png"
//     obj.name = "StarkWars Character #" + token_id
//
//     //保存到文件
//     fs.writeFile('./json/' + token_id + '.json', JSON.stringify(obj), function (err) {
//         if (err) {
//             console.log(err);
//         }
//     })
// }
//
// for (let i = 10000; i < 18000; i++) {
//     let token_id = 200000000 + i;
//     let obj = JSON.parse(JSON.stringify(template))
//     obj.image = "https://lucarsli.github.io/starkwars/images/1/" + Math.floor(Math.random() * 18) + ".png"
//     obj.name = "StarkWars Aircraft #" + token_id
//
//     //保存到文件
//     fs.writeFile('./json/' + token_id + '.json', JSON.stringify(obj), function (err) {
//         if (err) {
//             console.log(err);
//         }
//     })
// }
//
// for (let i = 10000; i < 50000; i++) {
//     let token_id = 300000000 + i;
//     let obj = JSON.parse(JSON.stringify(template))
//     obj.image = "https://lucarsli.github.io/starkwars/images/2/" + Math.floor(Math.random() * 18) + ".png"
//     obj.name = "StarkWars Starship #" + token_id
//
//     //保存到文件
//     fs.writeFile('./json/' + token_id + '.json', JSON.stringify(obj), function (err) {
//         if (err) {
//             console.log(err);
//         }
//     })
// }
//
for (let i = 10000; i < 50000; i++) {
    let token_id = 400000000 + i;
    let obj = JSON.parse(JSON.stringify(template))
    obj.image = "https://lucarsli.github.io/starkwars/images/3/" + Math.floor(Math.random() * 17) + ".png"
    obj.name = "StarkWars Base #" + token_id

    //保存到文件
    fs.writeFile('./json/' + token_id + '.json', JSON.stringify(obj), function (err) {
        if (err) {
            console.log(err);
        }
    })
    //关闭具柄
    // fs.close(fd, function (err) {
}