const HashMap = require("../HashMap");

describe("HashMap class", () => {
  const hashM = new HashMap();
  test("HashMap instance is functional", () => {
    console.log(hashM.buckets);
    expect(hashM.capacity).toEqual(hashM.buckets.length);
    expect(hashM.count).toEqual(0);
  });

  test("HashMap hash method are functional", () => {
    const joe = ["joe", "mama"];
    //console.log(hashM.hash(joe[0]));
  });

  test("HashMap set method are functional", () => {});

  test("HashMap List toString method is functional", () => {});

  test("HashMap List pop method is functional", () => {});
});
