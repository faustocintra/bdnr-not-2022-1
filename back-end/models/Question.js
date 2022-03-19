const mongoose = require('mongoose')


module.exports = function() {

    const schema = mongoose.Schema({
        question: {
            type: String,
            required: true
        },
        // Chave estrangeira para QuestionGroup
        group: {
            type: mongoose.ObjectId,
            ref: 'QuestionGroup',
            required: true
        } 
    })

    return mongoose.model('Question', schema, 'questions')
}