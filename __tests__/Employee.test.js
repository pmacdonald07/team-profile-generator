const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee("Patrick", 1, "patrick@email.com");

  expect(employee.name).toBe("Patrick");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("patrick@email.com");
  expect(employee.role).toBe("Employee");
});

test("returns employee name as string", () => {
  const employee = new Employee("Patrick", 1, "patrick@email.com");

  expect(employee.getName()).toBe("Patrick");
});

test("returns employee id as number", () => {
  const employee = new Employee("Patrick", 1, "patrick@email.com");

  expect(employee.getId()).toEqual(1);
});

test("returns employee email as string", () => {
  const employee = new Employee("Patrick", 1, "patrick@email.com");

  expect(employee.getEmail()).toBe("patrick@email.com");
});

test("return employee role as Employee", () => {
  const employee = new Employee("Patrick", 1, "patrick@email.com");

  expect(employee.getRole()).toBe("Employee");
});
