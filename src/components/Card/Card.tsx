import { 
  Box as MuiBox, 
  Card as MuiCard, 
  CardProps as MuiCardProps,
  CardMedia as MuiCardMedia, 
  CardMediaProps as MuiCardMediaProps 
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography } from 'components/Typography';
import { PrimaryButton } from 'components/PrimaryButton';
import testImage from '../../nasaTest.jpeg';

export type CardProps = {
  /** Content to display in the card */
  description?: string;
  /** Height of the card */
  height: number;
  /** Image to display in the card */
  image: MuiCardMediaProps['image'];
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
} & MuiCardProps;

export const Card = (props: CardProps) => {

  const {
    description = '',
    height = 480,
    image = testImage,
    imageDescription,
    maxWidth = 345,
    title,
    url,
    width = 312,
    ...other
  } = props;

  return (
    <Link to={url}>
      <MuiCard
        sx={{ 
          minWidth: width,
          maxWidth, 
          boxShadow:'none',
          ':focus': {
            border: '1px dotted',
          }
        }}
        {...other}
      >
        <MuiBox sx={{ position: 'relative' }}>
          <MuiCardMedia
            component="img"
            height={height}
            width={width}
            image={image}
            alt={imageDescription}
          />
          <MuiBox
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
          <MuiBox
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
          </MuiBox>
          <MuiBox
            sx={{
              position: 'relative', top: '-10px', zIndex: '3'
            }}
          >
          </MuiBox>
        </MuiBox>
      </MuiCard>
    </Link>
  );
}

export default Card;