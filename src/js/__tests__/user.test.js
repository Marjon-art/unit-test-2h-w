import compareHealth from "../user.js"

const items = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
]

const arr = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]

test("matchers compare", () => {
    const result = compareHealth(items);
    expect(result).toEqual(arr);
});
