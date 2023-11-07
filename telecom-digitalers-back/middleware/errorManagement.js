function errorManagement(err, req, res, next) {
    // Log the error, for now just console.log
    console.log(err);

    if (res.headersSent) {
        return next(err);
    }

    // Customize error message
    let message = '¡Algo salió mal!';
    if (err.name === 'ValidationError') {
        message = 'Datos inválidos proporcionados';
    }

    // Hide error details in production
    const errorDetails = process.env.NODE_ENV === 'development' ? err : {};

    res.status(500);
    res.json({ message, error: errorDetails });
}

module.exports = errorManagement;