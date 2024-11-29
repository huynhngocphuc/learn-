// Subject: Lớp quản lý trạng thái và thông báo cho Observers
export default class Subject {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
    console.log(`Observer đã được thêm: ${observer.name}`);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs!== observer);
    console.log(`Observer đã được gỡ bỏ: ${observer.name}`);
  }

  notifyObservers(notify) {
    this.observers.forEach(observer => {
      observer.update(notify);
    });
  }

}
