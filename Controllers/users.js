
// modelsusers 
const modelOfUsers = require("../Models/Users"); // import model of students user

// controller Check Auth user
exports.getAllUsersBynode =(req, res)=>{
    
        //search user in dataBase
        modelOfUsers.find()
        .then(userFund =>{
            console.log(userFund);

        })
        .catch(error =>{
            console.log(error);
            res.status(500).json({error});
        })        
};

exports.getAllUsers =(req, res)=>{

        //search AllStudents in dataBase
        modelOfUsers.find()
        .then(userFund =>{
                res.status(200).json({msg:"Utalisateurs All", AllUsers:userFund});
            
        })
        .catch(error =>{
            console.log(error);
            res.status(500).json({error});
        })        
};
