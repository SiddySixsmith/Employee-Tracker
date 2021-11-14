
async function roleOptions() {
    const tArry = await sql.getRoleTable();

    const choices = tArry[0];

    let choicesArr = [];

    choices.forEach(item => {
        let objValue = {
        name: item.title,
        value: item.id
        }
        choicesArr.push(objValue);
    });

    return choicesArr;
}

async function departmentOptions() {
    const tArr = await sql.getDeparmentTable();

    const choices = tArr[0];

    let choicesArr = [];

    choices.forEach(item => {
        let objValue = {
        name: item.title,
        value: item.id
        }
        choicesArr.push(objValue);
    });

    return choicesArr;
}

async function employeeOptions() {
    const tArry = await sql.getEmployeeTable();

    const choices = tArry[0];

    let choicesArr = [];

    choices.forEach(item => {
        let objValue = {
        name: item.title,
        value: item.id
        }
        choicesArr.push(objValue);
    });

    return choicesArr;
}




module.exports = { roleOptions, employeeOptions, departmentOptions }