const express = require('express')
const router = express.Router()
const Member = require('./models/members')

//getAll-ReadAll Members
router.get('/members', async(req, res) => {
    const allMembers = await Member.find()
    console.log(allMembers)
    res.send(allMembers)
})

//post-Create
router.post('/members', async(req, res) => {
    const newMember = new Member({
        forename: req.body.forename,
        surname: req.body.surname,
        email: req.body.email
    })
    await newMember.save()
    res.send(newMember)
})

//get-ReadOne Member
router.get('/members/:id', async(req, res) => {
    try {
        const member = await Member.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(member);
    } catch {
        res.status(404);
        res.send({error: "Member does not exist!"});
    }
})


// update one member
router.patch('/members/:id', async(req, res) => {
    try {
        const update = req.body
        const member = await Member.findOneAndUpdate(
            { _id: req.params.id },
            {$set: update},
            {new: true}
        )
        res.send(member)
    } catch {
        res.status(404);
        res.send({ error: "Member does not exist!" })
    }
});

// delete one member via id
router.delete('/members/:id', async(req, res) => {
    try {
        await Member.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Member does not exist!" })
    }
});

module.exports = router