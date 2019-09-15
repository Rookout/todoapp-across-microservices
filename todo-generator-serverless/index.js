const rookout = require('rookout/openwhisk');

rookout.connect('wss://control.rookout.com', 443, 'e11fd0828f1498af3bedc250f8bc67dc0945383bf8d7f15138318daa9ac9a251');

function myAction(args) {
    const leftPad = require("left-pad")
    const lines = args.lines || [];

    var textArray = [
        'Go to the bank',
        'Buy milk',
        'Send an email to my boss',
        'Look for a restaurant',
        'Prepare for the webinar'
    ];
    var randomNumber = Math.floor(Math.random()*textArray.length);

    return { todo: textArray[randomNumber] }
}

exports.main = rookout.wrap(myAction);
