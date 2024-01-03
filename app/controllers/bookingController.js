const BookingDetails = require("../models/bookingTableModel");

async function postBooking(req, res) {

    const { tableNumber, userId , adults,children,bookingDate,bookingTime,phoneNumber,customerName } = req.body;

    const booked = await BookingDetails.create({tableNumber, userId , adults,children,bookingDate,bookingTime,phoneNumber,customerName});

    if(booked){
        res.status(201).json({msg:'Booking session Created' , booked})
    }else{
        res.status(400).json({msg:'error occured'});
    }
} 

async function bookingList(req , res) {
    const { adminId } = req.body;
    if(!adminId){
        res.status(400).json({msg : 'Not authenticated to view details'})
    }else{
        const booking = await BookingDetails.findAll();
        if(booking){
            res.status(200).json({msg : 'list fetched successfully' , booking})
        }else{
            res.status(400).json({msg : 'error occured'});
        }
    }
}


module.exports = { postBooking , bookingList };