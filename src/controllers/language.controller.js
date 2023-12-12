import {getConnection} from "./../database/database";

const getLanguages= async (req, res)=>{
    try{

        const connection = await getConnection();
        const [row] = await connection.query("SELECT id, name, programmers FROM language");
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
        const [row] = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?", id);
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
            return;
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
        await connection.query("DELETE FROM language WHERE id = ?", id);
        res.json({message: "language deleted succesfully."});

    } catch(error){

        res.status(500);
        res.send(error.message);

    }
};


const updateLanguage= async (req, res)=>{
    try{
        const {id} = req.params;
        const {name, programmers} = req.body;

        const language={
            name, programmers
        };


        if (name === undefined || programmers === undefined){
            res.status(400);
            res.json({message: "Bad request, check values."});
            return;
        }
        
        const connection = await getConnection();
        const [row] = await connection.query("UPDATE language SET ? WHERE id = ?", [language, id]);
        
        if (row.affectedRows === 0){
            res.json({message: "No language found for the given ID"})
        } else{
            res.json({message: "language updated succesfully."});
        }
        

    } catch(error){

        res.status(500);
        res.send(error.message);

    }
};

export const methods = {
    getLanguages,
    addLanguage,
    getOneLanguage,
    deleteLanguage,
    updateLanguage
};