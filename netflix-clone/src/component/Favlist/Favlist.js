import axios from "axios";
import { useState,useEffect } from "react";
import { Button, Container, Row, Card, Col } from "react-bootstrap";
function Favlist(){
    const [show,setShow] = useState(false);
    const [ele,setEle] = useState({});
    const [title,setTitleInput] = useState("");
    const [image,setImageInput] = useState("");

    const handleClose = ()=> setShow(false);

    const [data,setData]=useState([]);
    const getFromDatabase= async ()=>{
        return await axios.get(`https://movielibrarywebsite.herokuapp.com/getMovie`).then(result=>{
            setData(result.data);
            console.log(result.data);
        }).catch((err=>{
            console.log(err);
        }))
    }

    const deleteFromFav = async(id) =>{
        await axios.delete(`https://movielibrarywebsite.herokuapp.com/DELETE/${id}`)
                   .then(()=>{
                       console.log("deleted :(");
                       getFromDatabase();
                   }).catch((err)=>{
                       console.log(err);
                   })
    } 
    const update = async(id)=>{

        let updated = {title:ele.title,release_date:ele.release_date,poster_path:ele.poster_path,overview:ele.overview,id:ele.id}
        
      await axios.put(`https://movielibrarywebsite.herokuapp.com/UPDATE/${id}`,updated)
                  .then(()=>{
                    getFromDatabase();
                  }).catch(err=>{
                      console.log(err);
                  })
    }

    
  useEffect(()=>{
    getFromDatabase()
},[]);
    return (
<>
<Container className="div-container">

                <Row md={3}>{

                data.length && data.map((ele) => (
                    <Col key={ele.id} md={4}>
                        <Card className='div-card'>
                            <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} />
                            <Card.Body>
                                <Card.Title className="div-card-title">{ele.title}</Card.Title>
                                <Card className="div-card-release-data">{ele.release_date}</Card>

                                <Card className="div-card-overview">{ele.overview}</Card>
                                
                                <div>
                                    <Button className="div-card-button" variant='primary' onClick={()=>{
                                       setShow(true)
                                       setEle(ele);
                                       setTitleInput(ele.title);
                                       setImageInput(`https://image.tmdb.org/t/p/w500${ele.poster_path}`);
                                       update(ele.id);
                                    }}>update</Button>
                                     <Button className="div-card-button" variant='primary' onClick={()=>{
                                        deleteFromFav(ele.id);
                                    }}>delete</Button>
                                </div>

                               
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>

            </Container>
</>
    );
}
export default Favlist;