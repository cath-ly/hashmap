const HashMap = require("../HashMap");

describe("HashMap class", () => {
  const hashM = new HashMap();
  const kvPair = ["key", "value"];
  const newPair = ["key", "newValue"];
  test("HashMap instance is functional", () => {
    expect(hashM.capacity).toEqual(hashM.buckets.length);
    expect(hashM.length()).toEqual(0);
  });

  test("HashMap hash method are functional", () => {
    expect(hashM.hash(kvPair[0])).toEqual(15);
  });

  test("HashMap set method are functional", () => {
    hashM.set(kvPair[0], kvPair[1]);
    expect(hashM.length()).toEqual(1);
    expect(hashM.buckets[15].size()).toEqual(1);
    expect(hashM.buckets[15].head().value).toEqual(kvPair);

    hashM.set(newPair[0], newPair[1]);
    expect(hashM.length()).toEqual(1);
    expect(hashM.buckets[15].size()).toEqual(1);
    expect(hashM.buckets[15].head().value).toEqual(newPair);

    hashM.set("Key", "value");
    expect(hashM.length()).toEqual(2);
    expect(hashM.buckets[15].size()).toEqual(2);
    expect(hashM.buckets[15].tail().value).toEqual(["Key", "value"]);
  });

  test("HashMap List get method is functional", () => {
    const key = hashM.get("key");
    const invalid = hashM.get("noKey");
    expect(key).toMatch("newValue");
    expect(invalid).toBe(null);
  });

  test("HashMap List has method is functional", () => {
    const key = hashM.has("key");
    const invalid = hashM.has("noKey");
    expect(key).toBe(true);
    expect(invalid).toBe(false);
  });

  test("HashMap List remove method is functional", () => {});
  test("HashMap List keys method is functional", () => {});
  test("HashMap List values method is functional", () => {});
  test("HashMap List entries method is functional", () => {});
  test("HashMap List clear method is functional", () => {});
});
