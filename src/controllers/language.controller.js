import {getConnection} from "./../database/database";

const getLanguages= async (req, res)=>{
    try{

        const connection = await getConnection();
        const [row, fields] = await connection.query("SELECT id, name, programmers FROM language");
        console.log(row);
        res.json(row);

    } catch(error){

        res.status(500);
        res.send(error.message);

    }
};


const addLanguage= async (req, res)=>{
    try{
        const {name, programmers } = req.body;

        if(name === undefined || programmers === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field."})
        }
        
        const language={
            name, programmers
        };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO language SET ?", language)
        res.json({message: "language added succesfully."}, result);

    } catch(error){

        res.status(500);
        res.send(error.message);

    }
};

export const methods = {
    getLanguages,
    addLanguage
};