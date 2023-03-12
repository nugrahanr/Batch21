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

app.get('/api/department',(req,res)=> {
    pool.query('select *  from departments',
    [],
    (error,result)=>{
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/department/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from departments where department_id = $1',[id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/department/',(req,res)=> {
    const {department_name} = req.body
    pool.query('insert into departments (department_name) values ($1)',[department_name],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).json(result.rowCount)
    })
})

app.put('/api/department/:id',(req,res)=> {
    const {id} = req.params
    const {department_name} = req.body

    pool.query('update departments set department_name = $1 where department_id = $2',[department_name,id],
    (error,result) => {
        if (error) {
            throw error
        }
        res.status(200).end('Data berhasil diupdate')
    })
})

app.delete('/api/department/:id',(req,res)=> {
    const {id} = req.params

    pool.query('delete from departments where department_id = $1',[id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).end('Data berhasil dihapus')
    })
})
