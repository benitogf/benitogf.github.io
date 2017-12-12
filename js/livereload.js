(function () {
  'use strict'

  var socket = document.createElement('script')
  var script = document.createElement('script')
  socket.setAttribute('src', 'http://localhost:8008/socket.io/socket.io.js')
  script.type = 'text/javascript'

  socket.onload = function () {
    /* eslint-disable */
    if (false) {
      var error = '<code>' + false + '</code>'
      if (false) {
        error = '<span>Error processing file:' + error + ' - line: ' + false + ' column: ' + false + '</span>'
      }
      document.write(error)
    }
    /* eslint-disable */
    document.head.appendChild(script)
  }
  script.text = [
    'window.socket = io("http://localhost:8008");',
    'socket.on("bundle", function() {',
    'console.log("livereaload triggered ")',
    'window.location.reload(false);',
    '});'
  ].join('\n')
  document.head.appendChild(socket)
}())
