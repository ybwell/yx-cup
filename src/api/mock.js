import Mock from 'mockjs'
import CardApi from './mockData/card'
import BorrowApi from './mockData/borrow'
import CollectionApi from './mockData/collection'
import OutApi from './mockData/out'
// import BoardApi from './mockData/board' //BoardApi为自定义，取什么名字都可以
//拦截请求
//Mock.mock(url, function)，url为自定义
//当拦截到匹配 url 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回)

//数据总览
Mock.mock('/card/getCardData', CardApi.getCardData())
Mock.mock('/card/getAllPeopleNumber', CardApi.getAllPeopleNumber())
Mock.mock('/card/getReaderData', CardApi.getReaderData())
Mock.mock('/card/getSeatNum', CardApi.getSeatNum())
Mock.mock('/card/getSortNum', CardApi.getSortNum())
Mock.mock('/card/getBorrowData', CardApi.getBorrowData())
Mock.mock('/card/getBookRank', CardApi.getBookRank())
Mock.mock('/card/getTotalNum', CardApi.getTotalNum())

//借书详情
Mock.mock('/borrow/getBorrowList', BorrowApi.getBorrowList())
//馆藏
Mock.mock('/collection/getCollectionList', CollectionApi.getCollectionList())
//逾期未还
Mock.mock('/out/getOutData', OutApi.getOutData())
