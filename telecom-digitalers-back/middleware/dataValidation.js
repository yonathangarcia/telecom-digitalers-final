const { check, validationResult } = require('express-validator');

const validateBlogEntry = [
    // title must be at least 5 chars long and not contain any banned words
    check('title')
        .isLength({ min: 5 }).withMessage('El título debe tener al menos 5 caracteres'),

    // content must not be empty
    check('content').not().isEmpty().withMessage('El contenido no puede estar vacío'),

    // authorId must be a valid MongoDB ObjectId
    check('authorId').isMongoId().withMessage('El authorId debe ser un ID válido de MongoDB'),

    // Process the validation results
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateBlogEntry;