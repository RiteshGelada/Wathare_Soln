import React,{useState,useEffect} from "react";
import SocketIOClient from 'socket.io-client'
import {LineChart,Tooltip,XAxis,CartesianGrid,Line} from 'recharts'

function App() {
  const [data,setData] = useState([])

  useEffect(()=>{
    
    const socket = SocketIOClient("http://127.0.0.1:4001/")
    socket.on("message",(data) => {
    setData(data) 
    this.render()
    // this.render()
    })  
  },[])
  
  return (
   <div>
    {/* <h>{data}</h> */}
  <LineChart
  width={1500}
  height={400}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
  >
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="x" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="y" stroke="#387908" yAxisId={1} />
  </LineChart>

  </div>
  );
}

export default App;
