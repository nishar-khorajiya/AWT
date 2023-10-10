const PersonalInfos=require('../models/Personalinfo');

const createPersonalInfo=async(req,res)=>{
    const {name,age,email}=req.body;
    try{
        const newIfo=new PersonalInfos({name,age,email});
        await newIfo.save();
        res.status(201).json(newIfo)
    }
    catch(error){
        res.status(500).json({error:'could not create personalInfo entry'});
    }
}

const getPersonalInfo=async(req,res)=>{
    try{
        const infoEntries=await PersonalInfos.find();;
        res.json(infoEntries);
    }
    catch(error){
        res.status(500).json({error:'could not retive personalinfo entries'});
    }
}

module.exports={createPersonalInfo,getPersonalInfo};