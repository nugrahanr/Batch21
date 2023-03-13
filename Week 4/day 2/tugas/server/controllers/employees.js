import { sequelize } from "../models/init-models"

const findAll = async(req,res)=> {
    try {
        const employee = await req.context.models.employees.findAll({
            include :[{
                model : req.context.models.employees,
                as : 'employees'
            }] 
        })
        return res.send(employee)
    } catch (error) {
        return res.status(400).send(error)
    }  
}

const findOne = async(req,res)=> {
    try {
        const employee = await req.context.models.employees.findOne({
            where:{employee_id : req.params.id}
        })
        return res.send(employee)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const create = async(req,res)=>{
    try {
        const employee = await req.context.models.employees.create({
            first_name : req.body.first_name
        })
        return res.send(employee)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const update = async(req,res)=> {
    try {
        const employee = await req.context.models.employees.update({
            first_name : req.body.first_name
        },{returning : true, where: {employee_id : req.params.id}})
        return res.send(employee)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const deleted = async(req,res)=>{
    try {
        const employee = await req.context.models.employees.destroy({
            where:{employee_id : req.params.id}
        })
        return res.send(`delete ${employee} rows`)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const qureySQL = async(req,res)=> {
    try {
        const query = await sequelize.query('SELECT * from employees where employee_id = :id',
        {replacements : {id : req.params.id},type : sequelize.QueryTypes.SELECT})
        return res.send(query)
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted,
    qureySQL
}
