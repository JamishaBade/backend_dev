# Event loop
It is the core of Node.js's concurrency model. It allows non-blocking I/O on single threaded runtime making the process more efficient and faster processing. 

Event handler handles important task and give another additional tasks like I/O calculationfile system etc to worker threads so it is how it remains asynchronous

- there is a priority order in which the event loop processes actions.
1. Timers (settimeout(), setInterval())
2. Pending Callbacks: executes I/O callbacks deferred to the next iteration loop. (complese I/O that wasnt completed in the last iteration)
3. Idele, prepare: this is the internal phase used by node.js. Used internally by node.js to track and maintain the event loop itself. We dont interact with this one.
4. Poll: This retrieves new I/O requests,
5. Check: setImmediate() (after I/O requests but before the new timer)
5. close callbacks : Handles cleanup callbacks


code example:
```
console.log("start"); //  this handeled by event handler (V8) itself  (synchrnous)

setTimeout(() => console.log("timeout"), 0); //Timeout worker thread (asynchronous)
setImmediate(() => console.log("immediate"));  // this is check (after I/O) (asynchronous)

console.log("end"); // this also handled by the event handler (synchronous)


```

```
start
end
timeout
immediate
```