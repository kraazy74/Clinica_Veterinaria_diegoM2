   const validarContentType = (req, res, next) => {
    const metodosComBody = ['POST', 'PUT']

    if (metodosComBody.includes(req.method)) {
        const contentType = req.headers['content-type']

        if (!contentType || !contentType.includes('application/json')) {
            return res.status(415).json({
                erro: 'tipo de midia nao suportado'
            })
        
        }
    }

    next()
}

module.exports = validarContentType
