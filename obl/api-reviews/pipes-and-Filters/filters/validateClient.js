module.exports = {
    filterValidateClient,
};

var filterValidateClient = (input, next) => {
    //agarrar los datos del cliente de envio
    //validar que sea el mismo cliente que esta logueado

    //devuelve la review o error

    // request.post(
    // 'getThis',
    // { form: { result: input } },
    // (err, response, body) => {
    //     console.log(body);
    //     next(null, body);
    // });
};

if (require.main === module) {
  console.log("I'm process ID", process.pid);
  filterEncrypt(process.argv[2], (err, result) => process.send(result));
}

