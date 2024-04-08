const router = require('./desepesas.routes');
const home = require('./testeRequest.routes');

const AppRoutes = (app) => {
  app.use("/",home)
  app.use('/despesa', router);
};
module.exports = AppRoutes;
