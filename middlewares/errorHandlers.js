module.exports = async (err, req, res, next) => {
  const code = err.status || 500;
  res.status(code).send({
    errors: [err], // по хорошему так не делается но для наглядности что проиходит пойдет
  });
};