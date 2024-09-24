import prisma from "@/utils/prisma";
import express from "express";

export const getCategories = async(req:express.Request, res:express.Response)=>{
    try{
        const categories = await prisma.categories.findMany();
        return res.status(200).json({ status:true, data:categories });
    } catch (error) {
        return res.status(500).json({ status:false, message:error });
    }
}