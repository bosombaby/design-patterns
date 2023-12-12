// 定义一个类，参数是事件，里面有一个数组，包含订阅的人
class PubSub {
  constructor() {
    this.events = {}
  }

  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = []

    this.events[event].push(callback)
  }

  unSubscribe(event, callback) {
    if (!this.events[event]) return

    this.events[event] = this.events[event].filter((cb) => cb !== callback)
  }

  publish(event, data) {
    if (!this.events[event]) return
    for (let item of this.events[event]) item(data)
  }
}

const pubsub = new PubSub()
function callback1(data) {
  console.log('这里是第一个回调', data)
}

function callback2(data) {
  console.log('这里是第二个回调', data)
}

pubsub.subscribe('myEvent', callback1)
pubsub.subscribe('myEvent', callback2)

pubsub.unSubscribe('myEvent', callback1)
pubsub.publish('myEvent', '111')
