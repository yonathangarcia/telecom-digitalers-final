const { check, validationResult } = require('express-validator');

const validateBlogEntry = [
    check('title')
        .isLength({ min: 5 }).withMessage('El título debe tener al menos 5 caracteres'),

    check('content').not().isEmpty().withMessage('El contenido no puede estar vacío'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateBlogEntry;