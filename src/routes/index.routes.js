const despesaRouter = require('./despesa.routes');

const AppRouter = (app) => {
  
  app.use('/despesa/', despesaRouter);
};

module.exports = AppRouter;
