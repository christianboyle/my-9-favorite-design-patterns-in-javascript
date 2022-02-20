// https://www.dofactory.com/javascript/design-patterns/mediator

var Participant = function (name) {
  this.name = name
  this.chatroom = null
}

Participant.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to)
  },
  receive: function (message, from) {
    console.log(from.name + ' to ' + this.name + ': ' + message)
  }
}

var Chatroom = function () {
  var participants = {}

  return {
    register: function (participant) {
      participants[participant.name] = participant
      participant.chatroom = this
    },

    send: function (message, from, to) {
      if (to) {
        // single message
        to.receive(message, from)
      } else {
        // broadcast message
        for (key in participants) {
          if (participants[key] !== from) {
            participants[key].receive(message, from)
          }
        }
      }
    }
  }
}

function run() {
  var yoko = new Participant('Yoko')
  var john = new Participant('John')
  var paul = new Participant('Paul')
  var ringo = new Participant('Ringo')

  var chatroom = new Chatroom()
  chatroom.register(yoko)
  chatroom.register(john)
  chatroom.register(paul)
  chatroom.register(ringo)

  yoko.send('All you need is love.')
  yoko.send('I love you John.')
  john.send('Hey, no need to broadcast', yoko)
  paul.send('Ha, I heard that!')
  ringo.send('Paul, what do you think?', paul)
}

run()

/*
Yoko to John: All you need is love.
Yoko to Paul: All you need is love.
Yoko to Ringo: All you need is love.
Yoko to John: I love you John.
Yoko to Paul: I love you John.
Yoko to Ringo: I love you John.
John to Yoko: Hey, no need to broadcast
Paul to Yoko: Ha, I heard that!
Paul to John: Ha, I heard that!
Paul to Ringo: Ha, I heard that!
Ringo to Paul: Paul, what do you think?
*/
