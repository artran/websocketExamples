/*   Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License. */

/*
	The Definitive Guide to HTML5 WebSocket	
*/

var websocket = require("./websocket-server");

websocket.listen(80, "10.21.10.40", function(conn) {
  console.log("Plaintext connection opened");

  conn.on("data", function(opcode, data) {
    console.log("Plaintext message: ", data);
    conn.send(data);
  });

  conn.on("close", function(code, reason) {
    console.log("Plaintext connection closed: ", code, reason);
  });
});

websocket.listenTls(443, "10.21.10.40", function(conn) {
  console.log("TLS connection opened");

  conn.on("data", function(opcode, data) {
    console.log("TLS message: ", data);
    conn.send(data);
  });

  conn.on("close", function(code, reason) {
    console.log("TLS connection closed: ", code, reason);
  });
});
