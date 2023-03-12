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

app.get('/api/employee',(req,res)=> {
    pool.query('select *  from employees',
    [],
    (error,result)=>{
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/employee/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from employees where employee_id = $1',[id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/employee/',(req,res)=> {
    const {first_name} = req.body
    pool.query('insert into employees (first_name) values ($1)',[first_name],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/employee/:id',(req,res)=> {
    const {id} = req.params
    const {first_name} = req.body

    pool.query('update employees set first_name = $1 where employee_id = $2',[first_name,id],
    (error,result) => {
        if (error) {
            throw error
        }
        res.status(200).end('Data berhasil diupdate')
    })
})

app.delete('/api/employee/:id',(req,res)=> {
    const {id} = req.params

    pool.query('delete from employees where employee_id = $1',[id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).end('Data berhasil dihapus')
    })
})
