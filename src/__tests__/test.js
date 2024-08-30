import calculateLifeBar from "../lifebar";

const dataList = [
  ["green", 50, "healthy"],
  ["yellow", 15, "wounded"],
  ["red", 5, "critical"],
];

const handler = test.each(dataList);

handler(
  "testing function with %s status and %i health",
  (_, health, expected) => {
    const result = calculateLifeBar(health);
    expect(result).toBe(expected);
  }
);
