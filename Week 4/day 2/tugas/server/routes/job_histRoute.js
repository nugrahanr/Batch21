import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router()

router.get('/',indexCtrl.JhtCtrl.findAll)
router.get('/:id',indexCtrl.JhtCtrl.findOne)
router.post('/',indexCtrl.JhtCtrl.create)
router.put('/:id',indexCtrl.JhtCtrl.update)
router.delete('/:id',indexCtrl.JhtCtrl.deleted)
router.get('/sql/:id',indexCtrl.JhtCtrl.qureySQL)

export default router
 