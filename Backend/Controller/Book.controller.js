import { BookModel } from "../Models/Book.model.js";
import mongoose from "mongoose";

export const getBooks = async (req, res) =>{
    try{
        const books = await BookModel.find({});
        res.status(200).json({success: true, data: books});
    }catch(err){
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const addBook = async (req, res) =>{
    const {title, author, publishYear} = req.body;
    if(!title || !author || !publishYear){
        return res.status(400).json({success: false, message: "Please provide all the details"});
    }
    try{
        const newBook = new BookModel({title, author, publishYear});
        await newBook.save();
        res.status(201).json({success: true, data: newBook});
    }
    catch(err){
        console.log("Error in adding book: ", err);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const updateBook = async (req, res) =>{

};

export const deleteBook = async (req, res) =>{

};