export class ES7Comprehensions {
  method() {
    // Array comprehensions
    const results = [
      for (c of customers)
        if (c.city == "Seattle")
          { name: c.name, age: c.age }
    ];

    // Generator comprehensions
    const results = (
      for (c of customers)
        if (c.city == "Seattle")
          { name: c.name, age: c.age }
    );
  }
}
