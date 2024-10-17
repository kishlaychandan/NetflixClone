import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';
import { MdCancel } from "react-icons/md";

export default function MovieDialog() {
  const { open, id } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  
  const videoRef = React.useRef(null); // Reference for the video element
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(1); // Volume state (0 to 1)
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      videoRef.current.requestFullscreen(); // Request full screen
    } else {
      document.exitFullscreen(); // Exit full screen
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: 'transparent', // Set background to transparent
            boxShadow: 'none', // Remove shadow
            maxWidth: '90%', // Max width for larger screens
            width: '80%', // Default width for the dialog
            // height: '80%', 
          },
        }}
      >
        <DialogContent style={{ padding: 0, display: 'flex', flexDirection: 'column',width: '100%', height: '100%' }}>
          <DialogContentText id="alert-dialog-description" style={{ flex: 1 }}>
            <div className="relative w-full h-full">
              <VideoBackground movieId={id} bool={true} ref={videoRef} />
              {/* Video Controls */}
              {/* <div className="controls absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 flex justify-between items-center">
                <button onClick={togglePlayPause} className="text-white">
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button onClick={toggleFullScreen} className="text-white">
                  {isFullScreen ? "Exit Full Screen" : "Full Screen"}
                </button>
              </div> */}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ padding: '10px 2px', justifyContent: 'center'}} >
          <Button onClick={handleClose} ><MdCancel size={40} style={{ color: 'white' }}/></Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
