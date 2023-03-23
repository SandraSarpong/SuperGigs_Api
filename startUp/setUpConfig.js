import "dotenv/config";

export const configEnv = () => {
    if (process.env.NODE_ENV === "test") {
      require("dotenv").config({ path: ".env.test" });
    } else if (process.env.NODE_ENV === "production") {
      require("dotenv").config({ path: ".env.production" });
    } else {
      require("dotenv").config({ path: ".env.development" });
    }
  };