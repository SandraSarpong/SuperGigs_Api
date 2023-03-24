export const errorHandler = (error, req, res, next) => {
  // log errors from application
  console.error(error.status);
  console.error(error.message);

  // handle all other errors
  res.status(500).send("Something went wrong");
};
