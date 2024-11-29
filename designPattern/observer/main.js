import Subject from './Subject.js';
import Observers from './Observers.js';

const subject = new Subject()
const observer1 = new Observers("User 1")
const observer2 = new Observers("User 2")
const observer3 = new Observers("User 3")

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.notifyObservers("Trạng thái hệ thống đã thay đổi!");
orderdetails
subject.unsubscribe(observer2);

subject.notifyObservers("Trạng thái hệ thống đã thay đổi! bỏ Observers(2)");