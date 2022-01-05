// middleware/mockMiddleware.js
const path = require('path')
const fs = require('fs')
const cwd = process.cwd()
const Mock = require('mockjs')

const getMockData = (url: string) => {
    let result
    delete require.cache[require.resolve(url)]
    let data: any = require(url)
    if (typeof data === 'function') {
        result = data()
    } else {
        result = data
    }
    result = Mock.mock(result)
    console.log('result: ', result)
    return result
}

export default async (req: any, res: any, next: any) => {
    let reqUrl = req.url.split('?')[0]
    if (!/\/api/.test(reqUrl)) {
        next();
        return
    }
    console.log(reqUrl)
    let basePath = path.join(cwd, 'mock')
    let apiJsonPath = basePath + reqUrl
    if (fs.existsSync(apiJsonPath)) {
        let result = getMockData(apiJsonPath)
        res.json(result)
    } else {
        next()
    }
}