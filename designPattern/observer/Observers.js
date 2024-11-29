export default class Observers {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} đã nhân thông báo: ${data}`);
  }
}
