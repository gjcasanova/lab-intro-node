class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length++;
    if (this.length - 1 == 0) {
      this.items.push(item);
      return;
    }

    let pos = 0;

    while (this.items[pos] < item ) {
      pos++;
    }

    this.items.splice(pos, 0, item);
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  // Bonus
  sum() {}

  avg() {}
}

module.exports = SortedList;
