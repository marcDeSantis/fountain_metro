export const hello = {
  template: require('./hello.html'),
  controller() {
    this.hello = 'Hello World!';
    this.myName = 'Marc';
    this.colors = [
      'blue', 'red', 'green'
    ];
  }
};
