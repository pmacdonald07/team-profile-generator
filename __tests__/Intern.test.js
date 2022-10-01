const Intern = require("../lib/Intern");

test("creates Intern object with school property", () => {
  const intern = new Intern("Victor", 4, "victor@email", "UNC");

  expect(intern.school).toBe("UNC");
});

test("returns intern school", () => {
  const intern = new Intern("Victor", 4, "victor@email", "UNC");

  expect(intern.getSchool()).toBe("UNC");
});

test("returns Intern instead of Employee", () => {
  const intern = new Intern("Victor", 4, "victor@email", "UNC");

  expect(intern.getRole()).toBe("Intern");
});
