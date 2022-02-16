import  Modal  from "react-bootstrap/Modal";
import axios from 'axios';
import {useRef} from 'react';
import {Button} from 'react-bootstrap';
function Modalmovie({cardInfo,show,handleClose}){
    const commentInputRef = useRef("");
    const addToMovie = async ()=>{
        
       let movie = {id:cardInfo.id,title:cardInfo.title,release_date:cardInfo.release_date,poster_path:cardInfo.poster_path,overview:cardInfo.overview}
      
       await axios.post(`https://movielibrarywebsite.herokuapp.com/addMovie`,movie)
                  .then(()=>{
                      console.log("Done :) ");
                  }).catch((err)=>{
                      console.log("not");
                      console.log(err);
                  });
  
   }
    return(
        <>
        
 <Modal  show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img alt="" src={`https://image.tmdb.org/t/p/w500${cardInfo.poster_path}`} />
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <input ref={commentInputRef} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{
                        addToMovie();
                        handleClose();
                     } }> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Modalmovie;