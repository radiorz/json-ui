class VirtualData {
  constructor(data: any) {
    this.mergeData(data);
  }
  mergeData(data: any) {
    Object.assign(this, data);
  }
  disabled: Boolean;
}
