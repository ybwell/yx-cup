export default {
  //获取四个echarts数据
  getCardData() {
    return {
      option1: {
        title: {
          show: true,
          text: 31673,
          x: 'center',
          y: 'center', // 通过x,y将标题(进度)定位在圆环中心
          textStyle: {
            fontSize: '20',
            color: 'white',
            fontWeight: '400',
            fontFamily: 'DINPro, DINPro-Regular'
          }
        },
        series: {
          name: '',
          type: 'pie',
          radius: ['65%', '85%'],
          avoidLabelOverlap: true,
          labelLine: {
            show: false
          },
          data: [
            {
              value: 31673,
              name: '',
              itemStyle: {
                color: '#6790D8'
              }
            },
            {
              value: 17000,
              name: '',
              itemStyle: {
                color: 'pink'
              }
            }
          ]
        }
      },
      option2: {
        title: {
          show: true,
          text: 25361,
          x: 'center',
          y: 'center', // 通过x,y将标题(进度)定位在圆环中心
          textStyle: {
            fontSize: '20',
            color: 'white',
            fontWeight: '400',
            fontFamily: 'DINPro, DINPro-Regular'
          }
        },
        series: {
          name: '',
          type: 'pie',
          radius: ['65%', '85%'],
          avoidLabelOverlap: true,
          labelLine: {
            show: false
          },
          data: [
            {
              value: 25361,
              name: '',
              itemStyle: {
                color: '#6790D8'
              }
            },
            {
              value: 25000,
              name: '',
              itemStyle: {
                color: 'pink'
              }
            }
          ]
        }
      },
      option3: {
        title: {
          show: true,
          text: 1024,
          x: 'center',
          y: 'center', // 通过x,y将标题(进度)定位在圆环中心
          textStyle: {
            fontSize: '20',
            color: 'white',
            fontWeight: '400',
            fontFamily: 'DINPro, DINPro-Regular'
          }
        },
        series: {
          name: '',
          type: 'pie',
          radius: ['65%', '85%'],
          avoidLabelOverlap: true,
          labelLine: {
            show: false
          },
          data: [
            {
              value: 1024,
              name: '',
              itemStyle: {
                color: '#6790D8'
              }
            },
            {
              value: 2000,
              name: '',
              itemStyle: {
                color: 'pink'
              }
            }
          ]
        }
      },
      option4: {
        title: {
          show: true,
          text: 823,
          x: 'center',
          y: 'center', // 通过x,y将标题(进度)定位在圆环中心
          textStyle: {
            fontSize: '20',
            color: 'white',
            fontWeight: '400',
            fontFamily: 'DINPro, DINPro-Regular'
          }
        },
        series: {
          name: '',
          type: 'pie',
          radius: ['65%', '85%'],
          avoidLabelOverlap: true,
          labelLine: {
            show: false
          },
          data: [
            {
              value: 823,
              name: '',
              itemStyle: {
                color: '#6790D8'
              }
            },
            {
              value: 2000,
              name: '',
              itemStyle: {
                color: 'pink'
              }
            }
          ]
        }
      }
    }
  },
  //获取累计到馆人数
  getAllPeopleNumber() {
    return [8, 9, 4, 6, 5, 2]
  },
  //获取读者排行
  getReaderData() {
    return [
      {
        name: '由宇熙',
        count: 68
      },
      {
        name: '刘一龙',
        count: 59
      },
      {
        name: '张雪',
        count: 58
      },
      {
        name: '朱昊轩',
        count: 50
      },
      {
        name: '余文',
        count: 48
      },
      {
        name: '王之瑞',
        count: 47
      },
      {
        name: '宋雪',
        count: 43
      },
      {
        name: '吴天',
        count: 40
      },
      {
        name: '肖萌萌',
        count: 37
      }
    ]
  },
  //获取座位数量
  getSeatNum() {
    // return
    return {
      title: {
        left: 'center',
        top: 20,
        textStyle: {
          color: 'rgb(184, 174, 174)'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        min: 200,
        max: 9000,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 6096, name: '总座位数' },
            { value: 3215, name: '已坐数' },
            { value: 5362, name: '已预约数' },
            { value: 2881, name: '剩余座位数' }
          ].sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          label: {
            color: 'white'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200
          }
        }
      ]
    }
  },
  //获取图书分类数据
  getSortNum() {
    return {
      xAxis: {
        type: 'category',
        axisLabel: {
          textStyle: {
            color: 'white' //坐标的字体颜色
          }
        },
        data: ['I', 'P', 'Q', 'J', 'S', 'M', 'N']
      },
      yAxis: {
        type: 'value',
        min: 10000,
        max: 25000,
        interval: 5000,
        axisLabel: {
          textStyle: {
            color: 'white' //坐标的字体颜色
          }
        }
      },
      series: [
        {
          data: [16000, 23000, 16000, 13500, 18000, 17000, 13000],
          type: 'bar',
          itemStyle: { color: 'rgb(102, 190, 237)' }
        }
      ]
    }
  },
  //获取最近七天借书数据
  getBorrowData() {
    return {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          textStyle: {
            color: 'white' //坐标的字体颜色
          }
        }
      },
      yAxis: {
        type: 'value',
        min: 60,
        max: 150,
        interval: 30,
        axisLabel: {
          textStyle: {
            color: 'white' //坐标的字体颜色
          }
        }
      },
      series: [
        {
          data: [140, 120, 130, 85, 135, 147, 95],
          itemStyle: {
            color: 'rgb(212, 114, 212)'
          },
          type: 'line'
        }
      ]
    }
  },
  //获取借阅书籍排行
  getBookRank() {
    return [
      {
        name: '三体2：黑暗森林',
        count: 20
      },
      {
        name: '活着',
        count: 18
      },
      {
        name: '明朝那些事儿',
        count: 16
      },
      {
        name: '许三观卖血记',
        count: 14
      },
      {
        name: '天才在左，疯子在右',
        count: 12
      }
    ]
  },
  //获取馆藏总量
  getTotalNum() {
    return {
      title: {
        show: true,
        text: '2,537,236',
        x: 'center',
        y: 'center', // 通过x,y将标题(进度)定位在圆环中心
        textStyle: {
          fontSize: '20',
          color: 'white',
          fontWeight: '400',
          fontFamily: 'DINPro, DINPro-Regular'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      series: {
        name: '',
        type: 'pie',
        radius: ['55%', '85%'],
        avoidLabelOverlap: true,
        labelLine: {
          show: false
        },
        data: [
          {
            value: 1205725,
            name: '总馆',
            itemStyle: {
              color: '#6790D8'
            }
          },
          {
            value: 605961,
            name: '人文分馆',
            itemStyle: {
              color: 'rgb(224, 182, 189)'
            }
          },
          {
            value: 725550,
            name: '科学分馆',
            itemStyle: {
              color: 'rgb(137, 96, 137)'
            }
          }
        ],
        label: {
          color: 'white'
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        itemStyle: {
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  }
}
