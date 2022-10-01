const Engineer = require("../lib/Engineer");

test("creates Engineer object", () => {
  const engineer = new Engineer("Jack", 3, "jack@email.com", "jackGitHub");

  expect(engineer.gitHub).toBe("jackGitHub");
});

test("returns engineer github", () => {
  const engineer = new Engineer("Jack", 3, "jack@email.com", "jackGitHub");

  expect(engineer.getGitHub()).toBe("jackGitHub");
});

test("returns Engineer instead of Employee", () => {
  const engineer = new Engineer("Jack", 3, "jack@email.com", "jackGitHub");

  expect(engineer.getRole()).toBe("Engineer");
});
