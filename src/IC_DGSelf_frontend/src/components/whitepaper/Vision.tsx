import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Vision() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="vision-content"
        id="vision-header"
      >
        <Typography variant="h5">
          Vision
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: '0 2%' }}>
          <Typography variant="body1" color="text.secondary">
            At DGSelf, our vision is to spearhead the transformation of the
            digital identity landscape by becoming the premier platform for
            interoperable avatars in the Web3 ecosystem.
            <p>We foresee a future where customizable avatars, fully stored
              on-chain, set the new benchmark for digital identities. The Internet
              Computer Protocol (ICP) blockchain will serve as the cornerstone for
              this decentralized revolution, establishing DGSelf as the leading hub
              for creators and users alike.</p>
            <p>Our mission is to cultivate an inclusive and collaborative
              ecosystem that unites creators, consumers, and partners from across
              the globe. Together, we will elevate the development and adoption of
              interoperable avatars to unprecedented levels.</p>
            <p>DGSelf is designed to be an open and welcoming platform for
              everyone interested in the world of Web3 and interoperable avatars,
              regardless of their background or expertise.</p>
            <p>Our aim is to build a vibrant community of active participants who
              consistently contribute positive value to our platform.</p>
            <p>Our community is the foundation of DGSelf, and we are committed to
              fostering an environment that is welcoming, diverse, and inclusive.
              We promote open dialogue and collaboration among all participants,
              striving to maintain a culture of transparency and accountability in
              all our endeavors.</p>
            <p>By bringing together creators, consumers, and partners from around
              the world, we aim to redefine the digital identity landscape and
              drive the growth of interoperable avatars to new heights. Through
              this collective effort, we envision a future where fully
              customizable, on-chain avatars become the standard, with the ICP
              blockchain as the preferred platform for Web3 digital identities.</p>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
