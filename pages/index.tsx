import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Share';
import Link from 'next/link';

import { useSelector } from 'react-redux';

const Home: React.FC = (): JSX.Element => {
  const { videos } = useSelector((state) => state.ytsearch);

  return (
    <section className="flex flex-wrap justify-center items-center w-full gap-2 mt-[55px] h-screen">
      {videos?.length > 0 ? (
        videos.map((video, index) => (
          <Link href={video.id.videoId ? `https://youtube.com/watch?v=${video.id.videoId}` : `https://youtube.com/channel/${video.id.channelId}`} target="_blank">          
            <Card sx={{ maxWidth: 345, height: 450, maxHeight: 450, minHeight: 450, bgcolor: '#555957' }} key={index} className="cursor-pointer">
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: '#1F212D' }}>N</Avatar>
                }
                title={video.snippet.title}
                subheader={video.snippet.channelTitle}
              />
              <CardMedia 
                component="img"
                height="194"
                image={video.snippet.thumbnails.medium.url}
                alt="video thumbnail"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {video.snippet.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))        
      ) : (
        <h1>No videos to show...</h1>
      )}
    </section>
  );
};

export default Home;
