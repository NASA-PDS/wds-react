import MaterialCard from '@mui/material/Card';
import { CardMediaProps } from '@mui/material/CardMedia';
import CardMedia from '@mui/material/CardMedia';
import testImage from '../../nasaTest.jpeg';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Typography } from 'components/Typography';
import { PrimaryButton } from 'components/PrimaryButton';
import { Link } from 'react-router-dom';

export type CardProps = {
  /** Content to display in the card */
  description?: string;
  /** Height of the card */
  height: number;
  /** Image to display in the card */
  image: CardMediaProps['image'];
  /** Description of the image displayed in the card */
  imageDescription: string;
  /** Width of the card **/
  maxWidth: number;
  /** Title to display in the card */
  title: string;
  /** Link to go to when card or button is clicked */
  url: string;
  /** Width of the card **/
  width: number;
}

export const Card = ({
  description = '',
  height = 480,
  image = testImage,
  imageDescription,
  maxWidth = 345,
  title,
  url,
  width = 312,
}: CardProps) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const onCardMouseOver = () => {
    setIsCardHovered(true);
  }

  const onCardMouseOut = () => {
    setIsCardHovered(false);
  }

  return (
    <Link to={url}>
      <MaterialCard
        onMouseOver={onCardMouseOver} 
        onMouseOut={onCardMouseOut} 
        sx={{ 
          minWidth: width,
          maxWidth, 
          boxShadow:'none',
          ':focus': {
            border: '1px dotted',
          }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height={height}
            width={width}
            image={image}
            sx={{
              transform: isCardHovered? 'scale(1.25)' : 'scale(1)',
              transition: 'all .2s ease',
              verticalAlign: 'middle'
            }}
            alt={imageDescription}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width,
              height: '50%',
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
              color: 'white',
              //padding: '20px 20px',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              color: 'white',
              padding: '20px 20px',
            }}
          >
            <PrimaryButton label={title} size="16"></PrimaryButton>
            <Typography variant="body2" weight="regular">{description}</Typography>
          </Box>
          <Box
            sx={{
              position: 'relative', top: '-10px', zIndex: '3'
            }}
          >
          </Box>
        </Box>
      </MaterialCard>
    </Link>
  );
}

export default Card;