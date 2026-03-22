# Streams
- It is an abstraction for data that is incremetally sent over time rather than all at once.
- Data flows in chunks

## This model is essential for:

Large files

Network communication

Real-time data

Memory efficiency


## Socket 
A socket is a bidirectional communication endpoint over the network.
- 
## Duplex Stream 
- There is read and write buffer.
Client can send while receiving
Server can respond while reading

- Node.js request objects are readable streams.
- Node.js response objects are writable streams.