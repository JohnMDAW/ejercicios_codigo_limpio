const ESTADOS_VALUES = {
    "ACTIVE": "1",
    "INACTIVE" : "0"
}; 

var users = [
{
    "name" : "John",
    "status" : ESTADOS_VALUES.ACTIVE     
},
{
    "name" : "Jake",
    "status" : ESTADOS_VALUES.INACTIVE     
},
]



const getActiveUsers = (users) => {
    return users.filter(user => user.status === ESTADOS_VALUES.ACTIVE)
}

var usuariosActivos = getActiveUsers(users);

const printUsersData = (users) => {
    users.forEach(user => {
        console.log(`User Name: ${user.name}`);
        console.log(`Status: ${user.status}`);
    });
}

printUsersData(usuariosActivos)