const HashMap = require("../HashMap");

describe("HashMap class", () => {
  const hashM = new HashMap();
  const kvPair = ["key", "value"];
  const newPair = ["key", "newValue"];
  test("HashMap instance is functional", () => {
    expect(hashM.capacity).toEqual(hashM.buckets.length);
    expect(hashM.count).toEqual(0);
  });

  test("HashMap hash method are functional", () => {
    expect(hashM.hash(kvPair[0])).toEqual(15);
  });

  test("HashMap set method are functional", () => {
    hashM.set(kvPair[0], kvPair[1]);
    expect(hashM.count).toEqual(1);
    expect(hashM.buckets[15].size()).toEqual(1);
    expect(hashM.buckets[15].head().value).toEqual(kvPair);

    hashM.set(newPair[0], newPair[1]);
    expect(hashM.count).toEqual(1);
    expect(hashM.buckets[15].size()).toEqual(1);
    expect(hashM.buckets[15].head().value).toEqual(newPair);

    hashM.set("Key", "value");
    expect(hashM.count).toEqual(2);
    expect(hashM.buckets[15].tail().value).toEqual(["Key", "value"]);
  });

  test("HashMap List toString method is functional", () => {});

  test("HashMap List pop method is functional", () => {});
});
