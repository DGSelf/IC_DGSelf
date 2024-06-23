import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Roadmap() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="roadmap-content"
        id="roadmap-header"
      >
        <Typography variant="h5">
          Roadmap
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: '0 2%' }}>
          <Typography variant="body1" color="text.secondary">
            <Typography variant="h6" color="text.primary">Q1 2024: Initial Development and Planning (Completed)</Typography>
            <ul>
              <li><strong>Market Research: </strong>
                Understand user needs and competition.</li>
              <li><strong>Team Building: </strong>
                Assemble development team.</li>
              <li><strong>Concept Ideation: </strong>
                Finalize platform concept.</li>
              <li><strong>Technology Selection: </strong> Choose technology
                stack.</li>
            </ul>
            <br />
            <Typography variant="h6" color="text.primary">Q2 2024: Proof of Concept Development (Completed)</Typography>
            <ul>
              <li><strong>Proof of Concept: </strong>
                Develop platform proof of concept.</li>
              <li><strong>Avatar Customization: </strong>
                Implement live avatar customization.</li>
              <li><strong>Reward System: </strong>
                Reward users upon initial registration.</li>
              <li><strong>File Format Integration: </strong>
                Add support for .vrm file downloads.</li>
            </ul>
            <br />
            <Typography variant="h6" color="text.primary">Q3 2024: Creator Platform Development</Typography>
            <ul>
              <li><strong>NFT Marketplace Frontend: </strong>
                Develop frontend for asset minting and storage.</li>
              <li><strong>Backend Ecosystem Development: </strong>
                Build corresponding backend to store NFT data.</li>
              <li><strong>Early Creator Onboarding: </strong> Onboard early
                creators to test platform functionality.</li>
            </ul>
            <br />
            <Typography variant="h6" color="text.primary">Q4 2024: Consumer Platform Development</Typography>
            <ul>
              <li><strong>Frontend Development: </strong>
                Build frontend with advanced searching, sorting, and pagination.</li>
              <li><strong>Purchase Functionality: </strong>
                Integrate purchasing functionality for NFTs.</li>
              <li><strong>Feature Testing: </strong> Test frontend features for
                functionality and user experience.</li>
            </ul>
            <br />
            <Typography variant="h6" color="text.primary">Q1 2025: Public Launch and Marketing</Typography>
            <ul>
              <li><strong>Public Launch: </strong>
                Launch platform to the public.</li>
              <li><strong>Marketing Campaign: </strong>
                Attract users and creators.</li>
              <li><strong>Community Building: </strong> Engage community through
                social media.</li>
            </ul>
            <br />
            <Typography variant="h6" color="text.primary">Q2 2025: Platform Scaling and Feature Expansion</Typography>
            <ul>
              <li><strong>Infrastructure Scaling: </strong>
                Scale platform infrastructure.</li>
              <li><strong>Feature Expansion: </strong>
                Expand based on feedback.</li>
              <li><strong>Partnership Development: </strong> Partner with other
                platforms.</li>
            </ul>
            <br />
            <Typography variant="h6" color="text.primary">Future Goals</Typography>
            <ul>
              <li><strong>Cross-Platform Compatibility: </strong>
                Ensure compatibility with other platforms.</li>
              <li><strong>Token Utility Expansion: </strong>
                Expand token utility within ecosystem.</li>
            </ul>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
