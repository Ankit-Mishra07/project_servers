const Document = require('../models/document.model');


exports.createDocument = async (req, res) => {
    try {

        const document = await Document.create(req.body);
        return res.status(200).json({success:true, document})

    }catch(e) {
        return res.status(500).json({status:false, message:"Something went wrong, tplease try again later!"})
    }
}

exports.findDocument = async(req, res) => {
    try{
        const document = await Document.findById(req.params.id)
        return res.status(200).json({success:true, document})
    }catch(e) {
        return res.status(500).json({status:false, message:"Something went wrong, tplease try again later!"})
    }
}


exports.UpdateDocument = async (req, res) => {
    try{
        const document = await Document.findByIdAndUpdate(req.params.id, req.body, {
            new : true
        })
        return res.status(200).json({success:true, document})
    }catch(e) {
        return res.status(500).json({status:false, message:"Something went wrong, tplease try again later!"})
    }
}

exports.getAllDocument = async (req, res) => {
    try{
        const userid = req.query.user
        const document = await Document.find({userId:userid})
        return res.status(200).json({success:true, document})

    }catch(e) {
        return res.status(500).json({status:false, message:"Something went wrong, please try again later!"})
    }
}


exports.DeleteDocument = async (req, res) => {
    try{
        const document = await Document.findByIdAndDelete(req.params.id);
        return res.status(200).json({status:true, message:"Document deleted successfully"})

    }catch(e) {
        return res.status(500).json({status:false, message:"Something went wrong, please try again later!"})
    }
}