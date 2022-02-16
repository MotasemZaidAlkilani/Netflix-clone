import { Button, Container, Row, Card, Col } from "react-bootstrap";
import { useState } from "react";
import Modalmovie  from "../ModalMovie/Modalmovie";
function Movie(props) {
    const [cardInfo, setCardInfo] = useState({});
    const [show,setShow] = useState(false);

    const handleClose = ()=>setShow(false);
    return (
        <>
            <Container className="div-container">

                <Row md={3}>{


                    <Col key={props.data.id} md={4}>
                        <Card className='div-card'>
                            <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} />
                            <Card.Body>
                                <Card.Title className="div-card-title">{props.data.title}</Card.Title>
                                <Card className="div-card-release-data">{props.data.release_date}</Card>

                                <Card className="div-card-overview">{props.data.overview}</Card>
                                <div>
                                    <Button className="div-card-button" variant='primary' onClick={()=>{
                                        setCardInfo(props.data);
                                        setShow(true);
                                    }}>add to favourite</Button>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                </Row>

            </Container>
            {
            <Modalmovie cardInfo={cardInfo} show={show}handleClose={handleClose}/>
            }
        </>
    );
}
export default Movie;