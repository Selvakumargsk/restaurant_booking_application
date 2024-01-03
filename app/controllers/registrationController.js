const RegistrationDetails = require("../models/registrationModel");
const validateOtp = require("../models/validateOTPModel");
const { sendOTPEmail } = require("../utilsfunctions/sendMail");

async function CreateOtp(req, res) {
    const { email } = req.body;
    let validate;
    try {
        const isExist = await validateOtp.findOne({ where: { email } });
        console.log(isExist);
        if (!isExist) {
            validate = await validateOtp.create({ email });
        } else {
            validate = isExist
        }
        if (validate) {
            sendOTPEmail(email, validate.otp);
            console.log(`created successfully ${validate.otp} to ${email}`);
            res.status(201).json({ msg: 'otp sent to the email' })
        }

    } catch (err) {
        res.status(500).json({ msg: 'error occured ', err });
    }
}


async function VerifyOTP(req, res) {
    const { email, otp } = req.body;
    console.log(req.body);
    try {
        const Verify = await validateOtp.findOne({ where: { email, otp } });
        if (Verify) {
            res.status(200).json({ msg: 'verified successfully' })
        }

    } catch (err) {
        res.status(500).json({ msg: 'error occured ', err });
    }
}


async function CreateUser(req, res) {
    try {
        const { email, password, confirmPassword } = req.body;
        const validUser = await validateOtp.findOne({ where: { email } });
        let userRegistration;
        const isExist = await RegistrationDetails.findOne({ where: { email } });
        if (isExist) {
            await RegistrationDetails.update({ password , confirmPassword} , {where : {email}});
            res.status(201).json({ msg: 'user registered successfully' });
        } else {
            if (!validUser) {
                res.status(400).json({ error: "sorry you are not authenticated please verifyOtp to continue" });
            } else {
                await validateOtp.destroy({ where: { email } });
                userRegistration = await RegistrationDetails.create({ id: validUser.id, email, password, confirmPassword });
                res.status(201).json({ msg: 'user registered successfully' });
            }
        }
    } catch (err) {
        res.status(500).json({ msg: 'error occured ', err });
    }
}


module.exports = { CreateOtp, VerifyOTP, CreateUser }

