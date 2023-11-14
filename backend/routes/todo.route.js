const express = require('express');
const { runQuery } = require('../DB Connection/runQuery');
const pool = require('../DB Connection/dbConnection');
const { route } = require('../app');
const router = express.Router();

router.post("/", async(req, res)=>{
    try{
        
        const {description} = req.body;
        const descQuery = `INSERT INTO ptable (description) VALUES('${description}') RETURNING *`;
        let descQueryResult = await runQuery(descQuery);

        res.json(descQueryResult.rows);

    }catch(err){
        console.error(err.message);
    }
});

router.get("/", async(req, res)=>{
    try{

        const getAllQuery = `SELECT * FROM ptable`;
        const getAllQueryResult = await runQuery(getAllQuery);
        
        res.json(getAllQueryResult.rows);

    }catch(err){
        console.error(err.message);
    }
});

router.get("/:id", async(req, res)=>{
    try{

        const {id} = req.params;
        const getSingleQuery = `SELECT * FROM ptable WHERE tid = ${id}`;
        const getSingleQueryResult = await runQuery(getSingleQuery);

        res.json(getSingleQueryResult.rows);

    }catch(err){
        console.error(err.message);
    }
});

router.put("/:id", async(req, res)=>{
    try{

        const {id} = req.params;
        const {description} = req.body;
        const putSingleQuery = `UPDATE ptable 
                                SET description = '${description}'
                                WHERE tid = ${id}
                                RETURNING *`;
        const putSingleQueryResult = await runQuery(putSingleQuery);

        res.json(putSingleQueryResult.rows);

    }catch(err){
        console.error(err.message);
    }
});

router.delete("/:id", async(req, res)=>{
    try{

        const {id} = req.params;
        const deleteSingleQuery = `DELETE FROM ptable  WHERE tid = ${id} RETURNING *`;
        const deleteSingleQueryResult = await runQuery(deleteSingleQuery);
        
        res.json(deleteSingleQueryResult.rows);
        
    }catch(err){
        console.error(err.message);
    }
})

module.exports = router;