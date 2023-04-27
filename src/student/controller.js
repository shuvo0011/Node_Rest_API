const pool = require('../../db');
const queries = require('./queries');


const getStudents = (req,res)=>{
    pool.query(queries.getStudents,(err,data)=>{
        if(err) throw err;
        res.status(200).json(data.rows);
    })
}

const getStudentById = (req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    pool.query(queries.getStudentById,[id],(err,data)=>{
        if(err) throw err;
        res.status(200).json(data.rows);
    })
}


const addStudent =(req,res)=>{
    const {name, email, age, dob} = req.body;
    
    // check if eamil exit
    pool.query(queries.checkEmailExists,[email],(err,data)=>{
        if(data.rows.length){
            res.send(' Email already Exits ');
        }
        // add student to db
        pool.query(queries.addStudent,
            [name, email, age, dob],
            (err,result)=>{
            if(err) throw err;
            res.status(201).send("student create succeddul");
        })
    })
}


const removeStudent=(req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id],(err,data)=>{
        const noStudentFound = data.rows.length;
        if(noStudentFound){
            res.send("studnet does no exits");
        }

        pool.query(queries.removeStudent,[id],(err,data)=>{
            if(err) throw err;
            res.status(200).send("studnet removed ")
        })
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent
}