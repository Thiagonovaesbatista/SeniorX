
/**
 * Nome da primitiva : createMergeDismissalMovimentation
 * Nome do dominio : hcm
 * Nome do serviço : payroll
 * Nome do tenant : trn21163359
 **/

exports.handler = async (event) => {
    return sendRes(200, JSON.parse(event.body));
};

const sendRes = (status, body) => {
  body.helloWorld = "Olá mundo!";

  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };

  console.log(body);

  return response;
};
