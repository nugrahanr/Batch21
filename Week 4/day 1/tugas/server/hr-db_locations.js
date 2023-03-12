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

app.get('/api/location',(req,res)=> {
    pool.query('select *  from locations',
    [],
    (error,result)=>{
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.get('/api/location/:id',(req,res)=>{
    const {id} = req.params
    pool.query('select * from locations where location_id = $1',[id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
})

app.post('/api/location/',(req,res)=> {
    const {country_id} = req.body
    pool.query('insert into locations (country_id) values ($1)',[country_id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).json(result.rowCount)
    })
}) //error. kemungkinan karena ada tabel yg kolomnya tdk boleh null

app.put('/api/location/:id',(req,res)=> {
    const {id} = req.params
    const {name} = req.body

    pool.query('update locations set city = $1 where location_id = $2',[name,id],
    (error,result) => {
        if (error) {
            throw error
        }
        res.status(200).end('Data berhasil diupdate')
    })
})

app.delete('/api/location/:id',(req,res)=> {
    const {id} = req.params

    pool.query('delete from locations where location_id = $1',[id],
    (error,result)=> {
        if (error) {
            throw error
        }
        res.status(200).end('Data berhasil dihapus')
    })
})
