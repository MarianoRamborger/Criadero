import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Comments from './CommentLoader' 
import { IconButton } from '@material-ui/core';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export  const CarrouselModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currentPic, displayAnotherPic] = useState(0)

  const handleCarrousel = (event) => {

    if (event.target.id === "fwd"){
    
      if (currentPic < Comments.length - 1) { 
        console.log(`CurrentPic ${currentPic}`)
        console.log(`Comments Lenght ${Comments.length}`)
        console.log("outcome: +1")
        console.log(Comments)
      displayAnotherPic(currentPic + 1)
      }
     else {
        console.log(`CurrentPic ${currentPic}`)
        console.log(`Comments Lenght ${Comments.length}`)
        console.log("outcome: reset")
        displayAnotherPic(0)
      }
    }

    else if (event.target.id === "prev"){
      if (currentPic === 0) {
        (displayAnotherPic(Comments.length - 1))
      }
      else displayAnotherPic(currentPic - 1)
    }
  
  }

  return (
    <div className="image-container">
  
      {/* <img src={props.image} alt={props.alt} className={props.className} onClick={handleOpen}/> */}
      {/* <p onClick={handleOpen}> <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/>  </p> */}

      <div className="comments-flex-div">
      <p className="comments-flex"> Opiniones </p>
      </div>

      <div className="comments-icon">
      <RecordVoiceOverIcon  onClick={handleOpen} />
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="carrousel-div">

          <IconButton onClick={handleCarrousel} className="arrow-button" >
          <p className="arrow backwards" id="prev">  {"<"}  </p>
          </IconButton>


          <img src={Comments[currentPic]} alt="Comentario"/>
          
       
          <IconButton onClick={handleCarrousel} className="arrow-button" >
          <p className="arrow forward" id="fwd">  {">"}  </p>
          </IconButton>

  

         
      
  


          </div>
        </Fade>
      </Modal>
    </div>
  );
}