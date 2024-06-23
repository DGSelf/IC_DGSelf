import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const items = [
  {
    icon: <GroupsIcon />,
    title: 'Unmatched Transparency',
    description: "Benefit from our open-source platform's transparency, open to community scrutiny and verification.",
  },
  {
    icon: <GppGoodIcon />,
    title: 'Cutting-Edge Security',
    description: "Benefit from advanced security measures safeguarding your assets and upholding your digital identity's integrity on the blockchain.",
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'ICP Blockchain Superiority',
    description: "Leverage ICP blockchain's superior data storage, low latency, processing power, and decentralized hosting.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Thriving Avatar Economy',
    description: "Tap into the booming market for customizable virtual goods, driven by avatars and growing at a 47% CAGR.",
  },
  {
    icon: <JoinInnerIcon />,
    title: 'Metaverse Integration',
    description: "Stay ahead with DGSelf in the metaverse and Web3 revolution, enabling immersive virtual experiences and secure digital ownership.",
  },
  {
    icon: <AutoAwesomeIcon />,
    title: 'Early Adopter Advantage',
    description: "Position advantageously in the emerging digital economy, capitalizing on the cultural shift towards greater digital integration.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Discover why DGSelf stands out: transparency, security, ICP blockchain superiority, the booming avatar economy,
            seamless metaverse integration, and early adopter advantage.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
