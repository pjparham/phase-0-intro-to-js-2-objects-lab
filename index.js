const employee = {
    name: "Lisa",
    streetAddress: "11 Mark Way"
}
function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    return {
        ...employeeObject,
        [key]: value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key,){
    const differentEmployee = {...employee}
    delete differentEmployee[key]
    return differentEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}