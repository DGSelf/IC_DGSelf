import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Introduction from './whitepaper/Introduction';
import Vision from './whitepaper/Vision';
import Product from './whitepaper/Product';
import Governance from './whitepaper/Governance';
import Tokenomics from './whitepaper/Tokenomics';
import Architecture from './whitepaper/Architecture';
import Roadmap from './whitepaper/Roadmap';
import Disclaimer from './whitepaper/Disclaimer';

export default function Whitepaper() {
  return (
    <Container
      id="whitepaper"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Whitepaper
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Introduction />
        <Vision />
        <Product />
        <Governance />
        <Tokenomics />
        <Architecture />
        <Roadmap />
        <Disclaimer />
      </Box>
    </Container>
  );
}
