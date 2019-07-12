function sayhello(name){
  console.log(`hello ${name}` + getApp().title)
}

function saygoodbey(name){
  console.log(`bey ${name}`)
}

module.exports.sayhello=sayhello
module.exports.saygoodbey=saygoodbey