import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router()

router.get('/',indexCtrl.CtrCtrl.findAll)
router.get('/:id',indexCtrl.CtrCtrl.findOne)
router.post('/',indexCtrl.CtrCtrl.create)
router.put('/:id',indexCtrl.CtrCtrl.update)
router.delete('/:id',indexCtrl.CtrCtrl.deleted)
router.get('/sql/:id',indexCtrl.CtrCtrl.qureySQL)

export default router
 