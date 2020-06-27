const set = new Set();

export default function logOnce(id, ...args) {
  if (set.has(id)) {
    return;
  }

  set.add(id);
  console.log(...args);
}
