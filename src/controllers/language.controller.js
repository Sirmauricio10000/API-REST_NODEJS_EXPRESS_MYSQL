import {getConnection} from "./../database/database";

const getLanguages= async (req, res)=>{
    try{

        const connection = await getConnection();
        const [row, fields] = await connection.query("SELECT id, name, programmers FROM language");
        res.json(row);

    } catch(error){

        res.status(500);
        res.send(error.message);

    }
};

const getOneLanguage= async (req, res)=>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const [row, fields] = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?", id);
        res.json(row);

    } catch(error){

        res.status(500);
        res.send(error.message);

    }
};


const addLanguage= async (req, res)=>{
    try{

        if (name === undefined || programmers === undefined){
            res.status(400);
            res.json({message: "Bad request, check values."});
        }

        const {name, programmers } = req.body;
        
        const language={
            name, programmers
        };

        const connection = await getConnection();
        await connection.query("INSERT INTO language SET ?", language)
        res.json({message: "language added succesfully."});

    } catch(error){

        res.status(500);
        res.send(error.message);

    }
};


const deleteLanguage= async (req, res)=>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const [row, fields] = await connection.query("DELETE FROM language WHERE id = ?", id);
        res.json(row);

    } catch(error){

        res.status(500);
        res.send(error.message);

    }
};

export const methods = {
    getLanguages,
    addLanguage,
    getOneLanguage,
    deleteLanguage
};