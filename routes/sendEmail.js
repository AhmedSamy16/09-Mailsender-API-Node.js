import nodemailer from "nodemailer"
import express from "express"

const router = express.Router()

router.route('/').post(async (req, res) => {
    const { to, subject, text, attachments } = req.body
    // 1. Check for valid input data
    if (!to || !subject || !text) {
        return res.status(400).json({
            status: "failed",
            message: 'Please provide the sent to email, subject and text'
        })
    }
    // 2. create transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        }
    })
    // 3. send email and res
    let details = {
        from: `Ahmed <${process.env.USER_EMAIL}>`,
        to,
        subject,
        text
    }
    if (attachments && Array.isArray(attachments)) {
        details.attachments = attachments
    }try {
        const info = await transporter.sendMail(details)
        console.log(info)
        res.status(200).json({
            status: 'success',
            message: 'Email sent successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }

    // transporter.sendMail(details, (err) => {
    //     if (err) {
    //         return res.status(400).json({
    //             status: "failed",
    //             message: err.message
    //         })
    //     }
    //     res.status(200).json({
    //         status: 'success',
    //         message: 'Email sent successfully'
    //     })
    // })
})

export default router