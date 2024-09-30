const express = require('express');
const router = express.Router();

const routes = [
  { path: '/getflights-json', module: './getflights-json' },
  { path: '/getcodearea-json', module: './getcodearea-json' },
  { path: '/getcodeflights-json', module: './getcodeflights-json' },
  { path: '/getprice-json', module: './getprice-json' },
  { path: '/resetpassword', module: './resetpassword' },
  { path: '/postbooking-json', module: './postbooking-json' },
  { path: '/getissued-json', module: './getissued-json' },
  { path: '/getstatusbooking-json', module: './getstatusbooking-json' },
  { path: '/getetiket-json', module: './getetiket-json' }
];

routes.forEach(route => {
  router.use(route.path, require(route.module));
});

router.get('/', (req, res) => {
  console.log(`username: ${process.env.USER_NAME}${process.env.PASS_WORD}`);
  res.status(200).json({ error: 'Please refer to the API documentation for usage instructions.' });
});

module.exports = router;