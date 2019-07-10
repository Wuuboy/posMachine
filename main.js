//计算item数量
caculateItemCounts=(items)=> {
    var itemCountsDict = {}
    for(var i=0;i<items.length;i++){
        if(items[i] in itemCountsDict){
            itemCountsDict[items[i]]++
        }else {
            itemCountsDict[items[i]]=1
        }
    }
    console.log(itemCountsDict)
    return '456465'
}

// //获取所有数据
// getAllData=()=>{
//     const allData = [
//         {"id": "0001", "name" : "Coca Cola", "price": 3},
//         {"id": "0002", "name" : "Diet Coke", "price": 4},
//         {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
//         {"id": "0004", "name" : "Mountain Dew", "price": 6},
//         {"id": "0005", "name" : "Dr Pepper", "price": 7},
//         {"id": "0006", "name" : "Sprite", "price": 8},
//         {"id": "0007", "name" : "Diet Pepsi", "price": 9},
//         {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
//         {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
//         {"id": "0010", "name" : "Fanta", "price": 12}
//     ]
//     return allData
// }
// module.exports = getAllData;
//
// //获得单个item的价格
// getSingleItemPrice=(itemCountsDict)=> {
//     const allData = getAllData()
//     const result = new Array()
//     for (const key in itemCountsDict){
//         for(let i=0;i<allData.length;i++){
//            if (key == allData[i]["id"]){
//                const singleItemPrice = {
//                    name:allData[i]["name"],
//                    price:allData[i]["price"],
//                    count:itemCountsDict[key]
//                }
//                result.push(singleItemPrice)
//            }
//         }
//     }
//     return result
// }
// module.exports = getSingleItemPrice;
//
// //计算总价
// caculateTotalPrice=()=>{
//     const itemInfo = getSingleItemPrice()
//     let totalPrice = 1
//     for(let i=0;i<itemInfo.length;i++){
//         for(let key in itemInfo[i]){
//             if (key=="name"){
//                 continue
//             }else {
//                 totalPrice = totalPrice*itemInfo[i][key]
//             }
//         }
//     }
//     return totalPrice
// }
// module.exports = caculateTotalPrice;
//
// //创建receiptTemplate
// createReceip=()=>{
//     const itemInfo = getSingleItemPrice()
//     const totalPrice = caculateTotalPrice()
//     let result
//     for(let i=0;i<itemInfo.length;i++) {
//         for (let key in itemInfo[i]) {
//             result = `${itemInfo[i][key]}`
//         }
//     }
// }
// module.exports = createReceip;
module.exports = caculateItemCounts;
