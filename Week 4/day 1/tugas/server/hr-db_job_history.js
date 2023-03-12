import dotenv from 'dotenv';

const express = require('express')
dotenv.config()

const Pool = require('pg').Pool;
const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'123',
    port:5432,
    database: 'hr-db'
})

const app = express()
app.use(express.json())
const port = process.env.PORT || 3005

app.listen(port,()=> console.log(`Server listening on port ${port}`))

app.get('/api/job_hist',(req,res)=> {
    pool.query('select *  from job_history',
    [],
    (error,result)=>{
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/job_hist/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from job_history where employee_id = $1',[id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/job_hist/',(req,res)=> {
    const {job_title} = req.body
    pool.query('insert into job_history (employee_id) values ($1)',[employee_id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/job_hist/:id',(req,res)=> {
    const {id} = req.params
    const {job_title} = req.body

    pool.query('update jobs set job_id = $1 where employee_id = $2',[job_title,id],
    (error,result) => {
        if (error) {
            throw error
        }
        res.status(200).end('Data berhasil diupdate')
    })
})

app.delete('/api/job_hist/:id',(req,res)=> {
    const {id} = req.params

    pool.query('delete from job_history where employee_id = $1',[id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).end('Data berhasil dihapus')
    })
})

//blm jajal
