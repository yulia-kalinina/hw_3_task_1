export default function showLifeBar(obj) {
  let result = "";
  if (obj.health >= 50) {
    result = "healthy";
  } else if (obj.health >= 15) {
    result = "wounded";
  } else if (obj.health < 15) {
    result = "critical";
  }
  return result;
}
