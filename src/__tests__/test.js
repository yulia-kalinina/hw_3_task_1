import showLifeBar from "../lifebar";

test("testing show lifebar with healthy status", () => {
  const heroObj = { name: "Маг", health: 90 };

  const result = showLifeBar(heroObj);
  expect(result).toBe("healthy");
});

test("testing show lifebar with wounded status", () => {
  const heroObj = { name: "Маk", health: 20 };

  const result = showLifeBar(heroObj);
  expect(result).toBe("wounded");
});

test("testing show lifebar with critical status", () => {
  const heroObj = { name: "Маd", health: 5 };

  const result = showLifeBar(heroObj);
  expect(result).toBe("critical");
});
