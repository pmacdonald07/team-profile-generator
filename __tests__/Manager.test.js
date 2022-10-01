const Manager = require("../lib/Manager");

test("creates manager object", () => {
  const manager = new Manager("Molly", 2, "molly@email.com", 10);

  expect(manager.name).toBe("Molly");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("molly@email.com");
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("overwrites getRole function to return 'manager'", () => {
  const manager = new Manager("Molly", 2, "molly@email.com", 10);

  expect(manager.getRole()).toBe("Manager");
});
