const userRepository = require("../userRepository");

describe("userRepository.registerUser", () => {
  it("should return true when insert a new object into db collection", async () => {
    const result = await userRepository.registerUser({
      username: "user",
      firstName: "first",
      lastName: "last",
      password: "password",
    });
    expect(result).to.be.true;
  });

  it("should return throw an error when insert a new object without username into db collection", async () => {
    try {
      await userRepository.registerUser({
        firstName: "first",
        lastName: "last",
        password: "password",
      });
    } catch (err) {
      expect(err).to.be.ok;
    }
  });
});
