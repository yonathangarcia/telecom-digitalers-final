const PersonData = require("../models/personDataModel");

const getPersonData = async (req, res) => {
    try {
        const personData = await PersonData.find();
        res.json(personData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postPersonData = async (req, res) => {
    const personData = new PersonData({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    });

    try {
        const newPersonData = await personData.save();
        res.status(201).json(newPersonData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getPersonData, postPersonData };