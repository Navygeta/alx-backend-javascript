class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : '';
    this._length = typeof length === 'number' ? length : 0;
    this._students = Array.isArray(students) ? students : [];

    Object.defineProperties(this, {
      name: {
        get() {
          return this._name;
        },
        set(value) {
          if (typeof value === 'string') {
            this._name = value;
          } else {
            throw new Error('Name must be a string');
          }
        }
      },
      length: {
        get() {
          return this._length;
        },
        set(value) {
          if (typeof value === 'number') {
            this._length = value;
          } else {
            throw new Error('Length must be a number');
          }
        }
      },
      students: {
        get() {
          return this._students;
        },
        set(value) {
          if (Array.isArray(value)) {
            this._students = value;
          } else {
            throw new Error('Students must be an array');
          }
        }
      }
    });
  }
}
