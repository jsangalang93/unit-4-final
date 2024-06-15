const express = require('express');
const router = express.Router();
const Entry = require('../models/entry.js');


router.post('/', (req, res) => {
    try {
        const createdEntry = Entry.create(req.body);
        res.status(201).json(createdEntry);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

router.get('/', async (req, res) => {
    try {
        const foundEntries = await Entry.find({})
        res.status(200).json(foundEntries)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.get('/:entryId', async (req, res) => {
    try {
        const foundEntry = await Entry.findById(req.params.entryId)
        res.status(200).json(foundEntry)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

router.delete('/:entryId', async (req, res) => {
    try {
        const deletedEntry = await Entry.findByIdAndDelete(req.params.entryId)
        res.status(200).json(deletedEntry)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

router.put('/:entryId', async (req, res) => {
    try {
        const updatedEntry = await Entry.findByIdAndUpdate(req.params.entryId, req.body, {new: true})
        res.status(200).json(updatedEntry)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

    module.exports = router;
