import './watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back' style={{ color: 'black' }}>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className='video'
        src='http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
        progress
        controls
        autoPlay
      ></video>
    </div>
  );
}
