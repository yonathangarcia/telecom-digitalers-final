function errorManagement(err, req, res, next) {

    console.log(err);

    if (res.headersSent) {
        return next(err);
    }

    let message = '¡Algo salió mal!';
    if (err.name === 'ValidationError') {
        message = 'Datos inválidos proporcionados';
    }

    const errorDetails = process.env.NODE_ENV === 'development' ? err : {};

    res.status(500);
    res.json({ message, error: errorDetails });
}

module.exports = errorManagement;