const express =require('express');
const router = express.Router();

const {list,detail, add, edit, store, update, removeConfirm, remove} = require('../controllers/courseController');
const { uploadCoursesImages } = require('../middlewares/upload');
const addCourseValidator = require('../validations/addCourseValidator');

/* /courses */

router
    .get('/list',list)
    .get('/detail/:id',detail)
    .get('/add',add)
    .post('/add',uploadCoursesImages.single('image'),addCourseValidator,store)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .get('/remove/:id',removeConfirm)
    .delete('/remove/:id',remove)


module.exports = router;