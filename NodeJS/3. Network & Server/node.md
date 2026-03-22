# Node Core Modules

1. fs (File System): Handles file operations like reading and writing files.
2. http: creates HTTP servers and makes HTTP requests.
3. https: launch a SSL Server.
4. path: provides utilities for handling and transforming file.
5. paths.os : Provides operating system related utility methods and properties.
6. events: handles events and event-driven programming
7. crypto: provides cyrptographic functionalities liike hashing and encryption
8. url : Parses and formats URL strings.

# Require Keyword

- It is a function in node.js that loads and use modules.
- purpose: imports modules in node.js
- caching : modules are cached after the first require call.
- .js is added authomatically and is not needed to at the end of module name.
- path resolution: node.js searches for modules in core, node_modules, and file paths.

  ```

  the syntax:
  const moduleName=requrire("module");

  const fs = require("fs");
  const http= required('https');
  const express=required('expression);
  ```

# Protocols:

- HTTP: Hyper text transfer protocol (no encryption)
- HTTPS: Hyper text transfer protocol secure
- TCP: transmission control protocol
