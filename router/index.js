var express = require('express');
var router = express.Router();
var Mail = require('../models/mail');

router.get('/', function (req, res, next) {
  Mail.getAllMails(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }

  });
});

router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    Mail.getMailById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
  else {
    Mail.getAllMails(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }

    });
  }
});

router.post('/', function (req, res, next) {
  Mail.addMail(req.body, function (err, count) {
    //console.log(req.body);
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);//or return count for 1 & 0
    }
  });
});

router.post('/:id', function (req, res, next) {
  Mail.deleteAll(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.delete('/:id', function (req, res, next) {
  Mail.deleteMail(req.params.id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }

  });
});

router.put('/:id', function (req, res, next) {
  Mail.updateMail(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;