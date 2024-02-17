class StringBuilder {
  #value;
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    return this.#value.push(str);
  }
  padStart(str) {
    return this.#value.unshift(str);
  }
  padBoth(str) {
    return this.#value.concat(str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
