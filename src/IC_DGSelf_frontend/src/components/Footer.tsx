import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import GithubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import SvgIcon from '@mui/material/SvgIcon';

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 6, sm: 8 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
          <Box sx={{ ml: '-15px' }}>
            <img
              src='/images/logo.png'
              style={{
                width: '220px',
                height: 'auto'
              }}
              alt="DGSelf Logo"
            />
          </Box>
          <Typography variant="body1" color="text.secondary" mb={1}>
            Join Digital Identity Evolution with DGSelf!
            <br />
            Follow us on social media for the latest updates.
          </Typography>
        </Box>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{ color: 'text.secondary', }}
        >
          <IconButton
            color="inherit"
            href="https://oc.app/community/bpsha-4qaaa-aaaar-bhyza-cai/?ref=jhknb-biaaa-aaaar-aym6q-cai"
            target="_blank"
            aria-label="Open Chat"
            sx={{ "&:hover": { color: "primary.main"}, alignSelf: 'center' }}
          >
            <SvgIcon fontSize="large">
              <path d="M.001 11.967a11.967 11.967 0 1 0 23.933.001 11.967 11.967 0 0 0-23.933 0m5.32 0a6.648 6.648 0 1 1 13.296.001 6.648 6.648 0 0 1-13.297 0" />
              <path fill="black" fill-opacity=".6" d="M18.891 2.215a11.95 11.95 0 0 1 3.772 4.256 11.8 11.8 0 0 1 0 10.995 11.95 11.95 0 0 1-3.772 4.255l-3.088-4.364a6.6 6.6 0 0 0 2.083-2.351 6.52 6.52 0 0 0 0-6.075 6.6 6.6 0 0 0-2.083-2.352z" />
            </SvgIcon>
          </IconButton>
          <IconButton
            color="inherit"
            href="https://discord.gg/ZuXdvFfp"
            target="_blank"
            aria-label="Discord"
            sx={{ "&:hover": { color: "primary.main"}, alignSelf: 'center' }}
          >
            <SvgIcon fontSize="large" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </SvgIcon>
          </IconButton>
          <IconButton
            color="inherit"
            href="https://x.com/DG_Self"
            target="_blank"
            aria-label="X"
            sx={{ "&:hover": { color: "primary.main"}, alignSelf: 'center' }}
          >
            <XIcon fontSize='large' />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://github.com/DGSelf"
            target="_blank"
            aria-label="GitHub"
            sx={{ "&:hover": { color: "primary.main"}, alignSelf: 'center' }}
          >
            <GithubIcon fontSize='large' />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}