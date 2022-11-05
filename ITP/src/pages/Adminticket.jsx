import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import ReplyDataService from '../services/reply.services'
import TicketDataService from '../services/ticket.services'
import styles from '../Styles/styles'
import Helmet from "../components/Helmet/Helmet";


const Mytickets = ({}) => {

    const [ticket, setTicket] = useState([])
    const [reply, setReply] = useState([])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const newReply ={
            reply
        }
        console.log(newReply)
        try{
            await ReplyDataService.addReply(newReply)
            alert("Reply added successfully!")
            navigate('/AdminTicket')
        }catch (err){
            setMessage({error: false, msg: err.message})
        }
    }

    const navigate = useNavigate()              // Navigate

    useEffect(() => {
        getTicket();
        getReply();
    }, [])
    
    
    const getTicket = async() => {
        const data = await TicketDataService.getAllTicket()
        console.log(data.docs)
        setTicket(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    const getReply = async() => {
        const data = await ReplyDataService.getAllReply()
        console.log(data.docs)
        setReply(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }


    
// navigate to 
const navigateTicketForm = () => {
    navigate('/ticket');
    };

   
return (

    <Helmet title="Mytickets">
       
      
       <div className="comment">
      
                <div className="comment-body">
  
      
                            {ticket.map((doc, index) => {
                                return(
                                    
                                    <><div className="comment-text" >{doc.firstName}</div><div className="comment-text">{doc.description}</div></>
                                       
                                        
                                       
                                        
                                                              
                                  
                                    )
                            })}
                 
                 </div> 
                 </div> 
                
                
                 us:{' '}
                 us:{' '}
                 <div className="comment">
                 <div className="comment-body">
      
                            {ticket.map((doc) => {
                                return(
                                    <div key={doc.id}>
                                       <><div className="comment-text">Agent</div><div className="comment-text">{doc.reply}</div></>
                                       
                                        
                                       
                                                               
                                    </div>   
                                                              
                                  
                                    )
                            })}
                 
                 </div> 
                 </div> 

                
                 <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
                 <h5 className="mb-30 padding-top-1x" style={{color:"white"}}>Reply to the ticket</h5>
                 <form onSubmit={handleSubmit} >
                 
                 us:{' '}
                 us:{' '}

                 <div className="form-group">
                    <textarea rows="7" cols="180" style={{resize: 'both'}} className="form-control form-control-rounded" name="reply" id="reply" defaultValue={ reply } onSelect={(e) =>{setReply(e.target.value)}} required></textarea> 
                    </div>
                    <div className="text-right">
                    <button type="submit" className= {`${styles.ALbtn} font-semibold`}>
                        Reply
                    </button>
                    </div>
                
              </form> 
               
    </Helmet>
   
  )
 
}

export default Mytickets