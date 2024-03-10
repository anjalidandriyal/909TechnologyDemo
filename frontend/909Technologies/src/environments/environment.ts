const HOSTNAME: string = "localhost";
const PORT_NUMBER: number = 3333;
const APPLICATION_NAME: string = '/ITSolution';

export const environment = {
  production: false,
  employeeAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/itSolution',
  employeeDetailsbyIdAPI:'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/itSolution',
  employeeDetailsAPI: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/itSolution',
  updateEmployeeDetails:'http://' +HOSTNAME +':' +PORT_NUMBER+APPLICATION_NAME +'/itSolution',
  deleteEmployeeDetails:'http://'+HOSTNAME+':'+PORT_NUMBER+APPLICATION_NAME+'/itSolution',
  filterEmployee:'http://'+HOSTNAME+':'+PORT_NUMBER+APPLICATION_NAME+'/itSolution'
};