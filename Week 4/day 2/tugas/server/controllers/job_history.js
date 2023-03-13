import { sequelize } from "../models/init-models"

const findAll = async(req,res)=> {
    try {
        const job_history = await req.context.models.job_history.findAll({
            include :[{
                model : req.context.models.job_history,
                as : 'job_history'
            }] 
        })
        return res.send(job_history)
    } catch (error) {
        return res.status(400).send(error)
    }  
}

const findOne = async(req,res)=> {
    try {
        const job_history = await req.context.models.job_history.findOne({
            where:{employee_id : req.params.id}
        })
        return res.send(job_history)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const create = async(req,res)=>{
    try {
        const job_history = await req.context.models.job_history.create({
            job_title : req.body.job_title
        })
        return res.send(job_history)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const update = async(req,res)=> {
    try {
        const job_history = await req.context.models.job_history.update({
           job_title : req.body.job_title
        },{returning : true, where: {employee_id : req.params.id}})
        return res.send(job_history)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const deleted = async(req,res)=>{
    try {
        const job_history = await req.context.models.job_history.destroy({
            where:{employee_id : req.params.id}
        })
        return res.send(`delete ${employee} rows`)
    } catch (error) {
        return res.status(400).send(error)
    }
}

const qureySQL = async(req,res)=> {
    try {
        const query = await sequelize.query('SELECT * from employee_history where employee_id = :id',
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
