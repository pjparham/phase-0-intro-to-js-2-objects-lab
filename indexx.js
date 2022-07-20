s// Write your solution in this file!
const employee = {
    name: "Jim",
    streetAddress: "11 Mellow Way",
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const differentEmployee = {...employee}
    delete differentEmployee[key]
    return differentEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key] 
    return employee
}
