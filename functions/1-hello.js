// domain/.netlify/functions/1-hello

exports.handler = async (event, context, cb) =>{
    return {
statusCode:200,
body:'My First Netlify Function Example!',
    }
}

