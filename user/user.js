const connection = require('../database/connection');
const express = require('express');
const user_router = express.Router();
const validateUser = require('./midleware').validateUser;
// Danh sách user

// Lấy danh sách user
user_router.get('/', (req, res) => {
    connection.query("SELECT * from users", (error, result) => {
        if (error) {
          console.error('Error creating table:', error);
        } else {
            res.status(200).json(result);
        }
      })
});

// Lấy chi tiết user
user_router.get('/:id', (req, res) => {
    connection.query("SELECT * from users where id = ?",[req.params.id], (error, result) => {
        if (error) {
          console.error('Error creating table:', error);
        } else {
            res.status(200).json(result);
        }
      }
    )
});

// Cập nhật thông tin user
user_router.put('/:id', (req, res,) => {
    connection.query("Update users set ? where id = ?",[req.body,req.params.id], (error, result) => {
        if (error) {
          console.error('Error creating table:', error);
        } else {
            res.status(200).json(result);
        }
      }
    )
});

// Thêm user mới
user_router.post('/', (req, res) => {
  connection.query("Insert into users set ?",req.body, (error, result) => {
    if (error) {
      console.error('Error creating table:', error);
    } else {
        res.status(200).json(result);
    }
  }
)
});

// Xóa user
user_router.delete('/:id', (req, res) => {
    connection.query("Delete from users where id = ?",[req.params.id], (error, result) => {
        if (error) {
          console.error('Error creating table:', error);
        } else {
            res.status(200).json(result);
        }
      }
    )
});
// Exports cho biến user_router
module.exports = user_router;