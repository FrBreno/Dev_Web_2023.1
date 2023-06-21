var express = require('express');
var router = express.Router();
var ProfessorService = require('services/professorService');
;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.get(
    '/listar',
    (req, res, nest) => {
        return res.json(ProfessorService.list())
    }
);

router.post(
    '/register',
    (req, res, next) => {
        const professor =  ProfessorService.register(req.body);
        return res.json(professor);
    }
);

module.exports = router;
