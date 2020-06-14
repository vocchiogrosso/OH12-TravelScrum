async function _SendEmail(req,res){
    console.log('User Search');
        var result = await User.findOne({ 
            AccountToken:req.body.AccountToken
        });
        if(!result) {
            console.log('Not Found');
            res.status(400).send(result);
            return;
        }else{
            const msg = {
                to: result.Email,
                from: 'no-reply@microsoft.com',
                subject: 'Getting Settled',
                text: 'Lets get your all settled in...',
                html: '<strong>Your Code Is: '+result.AccountPin+'</strong>',
            };
            sgMail.send(msg);
            console.log('Email Sent');
        }
        res.status(200).send(result);
}