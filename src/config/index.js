/**
 * 环境配置文件
 * 一般在企业级项目里面有三个环境
 * 开发环境
 * 测试环境
 * 线上环境
 */
//当前的环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi: 'https://fastmock.site/mock/ffd7d8cc80cdded198957473c129d88a/api'
  },
  test: {
    baseApi: '/api',
    mockApi: 'https://fastmock.site/mock/ffd7d8cc80cdded198957473c129d88a/api'
  },
  pro: {
    baseApi: '//test.future.com/api',
    mockApi: 'https://fastmock.site/mock/ffd7d8cc80cdded198957473c129d88a/api'
  }
}

export default {
  env,
  //mock的总开关
  mock: true,
  ...EnvConfig[env]
}
