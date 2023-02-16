const { check } = require('express-validator');

module.exports = [

    check('title')
        .notEmpty().withMessage('el título del curso es obligatorio')
        .isLength({ min: 5, max: 20 }).whitelist('el título debe tener entre 5 y 20 caractéres'),

    check('price')
        .notEmpty().withMessage('Debe indicar un precio')
        .isInt({ min: 1 }).withMessage('Solo números positivos'),

    check('chef')
        .notEmpty().withMessage('Debe colocar el chef'),

    check('description')
        .notEmpty().withMessage('La descripción del curso es requerida')
        .isLength({ min: 20, max: 80 }).whitelist('la descripción debe tener entre 20 y 80 caractéres'),

    check('section')
        .notEmpty().withMessage('¿a que sección pertenece?'),
]