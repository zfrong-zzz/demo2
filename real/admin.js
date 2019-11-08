const db = require('./conn')
let show = () => {
  return new  Promise((resolve, reject) => {
    db.query('select * from db_user', (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  })
}//显示全部 （select*）

// let select = (attributename, attribute) => {
//   return new Promise((resolve, reject) => {
//     db.query(`select * from user where ${attributename} = '${attribute}'`, (err, rows) => {
//       if(err) {
//         reject(err);
//       }
//       resolve(rows);
//     })
//   })
// }//查询一行（传参)

// let update = (updateattributename, newdata,attributename,attribute) => {
//   return new Promise((resolve, reject) => {
//     db.query(`update user set ${updateattributename} = '${newdata}' where ${attributename} = '${attribute}'`,(err,rows) => {
//       if(err) {
//         reject(err);
//       }
//       resolve(rows);
//     })
//   }) 
// }//修改

// let insert = (attributenames, attributes) => {
//   return new Promise((resolve, reject) => {
//     db.query(`insert into user ${attributenames} values ${attributes}`, (err,rows) => {
//       if(err) {
//         reject(err);
//       }
//       resolve(rows);
//     })
//   })
// }//增加

exports.show = show
// exports.select = select
// exports.update =  update
// exports.insert = insert
//在routes目录下index.js中
var express = require('express');
var router = express.Router();

router.get('/show', async (req, res, next) => {
  console.log(req.session.user)
  try {
    console.log(req.session.user)
    let result = await require('../services/users').show();
    res.send(result);
  } catch (e) {
    res.send(e);
  }
})

// router.get('/select', async (req, res, next) => {
//   try {
//     let param = req.query;
//     for (x in param) {
//       console.log(x + ' ' + param[x]);
//       let result = await require('../services/users').select(x, param[x]);
//       res.send(result);
//     }
//   } catch (e) {
//     res.send(e);
//   }
// })
// router.get('/update', async (req, res, next) => {
//   try {
//     let param = req.query;
//     let attributename = [], attribute = [];
//     for (x in param) {
//       console.log(x + ' ' + param[x])
//       attributename.push(x);
//       attribute.push(param[x])
//     }
//     let result = await require('../services/users').update(attributename[0], attribute[0], attributename[1], attribute[1]);
//     res.send(result);
//   } catch (e) {
//     res.send(e);
//   }
// })

// router.get('/insert', async (req, res, next) => {
//   try {
//     let param = req.query;
//     for (x in param) {
//       console.log(x + ' ' + param[x]);
//       let result = await require('../services/users').insert(x, param[x]);
//       res.send(result);
//     }
//   } catch (e) {
//     res.send(e);
//   }
// })
module.exports = router;