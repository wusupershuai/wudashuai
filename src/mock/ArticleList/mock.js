let Mock = require("mockjs")
let data = [
    { id: 1, title: "中国npm镜像源升级公告", author: "fengmk2", watchNumber: "43467", reply: "8" },
    { id: 2, title: "[望周知，求扩散]淘宝NPM镜像站喊你切换新域名啦", author: "atian25", watchNumber: "77331", reply: "13" },
    { id: 3, title: "Node.js 2021年开发者报告解读:健康稳步的发展中", author: "i5ting", watchNumber: "168026", reply: "10" },
    { id: 4, title: "[20211/26]请大家遵纪守法，勿发布不合规内容", author: "thonatos", watchNumber: "1766512", reply: "226" },
    { id: 5, title: "wWesockels介绍", author: "yvlscool", watchNumber: "4094", reply: "7" },
    { id: 6, title: "冒个泡，过完年面试奇虎360、", author: "dyjiang", watchNumber: "10090", reply: "13" },
    { id: 7, title: "Vue + Eggjs + Mysql的JS全栈实践。动态菜单, RBAC权限模型, WebSocket实现站内信。。", author: "imfdj", watchNumber: "10274", reply: "15" },
    { id: 8, title: "[notyjs]沉迷造轮子，无法自拔！又写了一个通知组件~", author: "daGaiGuanYu", watchNumber: "17590", reply: "6" },
]
// 获取
Mock.mock("/api/articlelist", 'get', function (config) {
    return data;
})

// 删除
Mock.mock(/\/api\/articlelist\/\d/, 'delete', function (config) {
    let arr = config.url.split("/");
    let id = arr.pop();
    data.splice(id, 1)
    data = data.map(function (item, id) {
        return {
            id,
            title: item.title,
            author: item.author,
            watchNumber: item.watchNumber,
            reply: item.reply
        }
    })
    return data;
})