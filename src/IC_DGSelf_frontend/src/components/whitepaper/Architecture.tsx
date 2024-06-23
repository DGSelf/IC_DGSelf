import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

export default function Architecture() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="architecture-content"
        id="architecture-header"
      >
        <Typography variant="h5">
          Architecture
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: '0 2%' }}>
          <Typography variant="body1" color="text.secondary">
            DGSelf is a progressive web application and a robust backend
            designed to handle avatar assets stored as NFTs. The platform ensures
            scalability and efficiency, allowing for seamless performance as user
            numbers grow. The GitHub repository for the project is publicly
            available: <br /><Link href="https://github.com/DGSelf">https://github.com/DGSelf</Link>
            <p>Here's an overview of the system's architecture:</p>
            <Typography variant="h6" color="text.primary">Main Backend Canister</Typography>
            <p>DGSelf's main backend canister is responsible for managing user
              data and avatar assets stored as NFTs. This canister will handle the
              minting, storage, and retrieval of these assets, ensuring efficient
              data management. It will create and manage additional canisters that
              function as distributed databases, providing a robust and scalable
              solution for handling large volumes of data.</p>
            <br />
            <Typography variant="h6" color="text.primary">Avatar Assets and NFTs</Typography>
            <p>Avatar assets are uploaded, minted, and sold by creators directly
              on the DGSelf website, which is fully stored on-chain. Each asset is
              represented as an NFT, ensuring ownership and provenance are securely
              managed. Creators can easily mint new assets, and users can purchase
              or rent these assets directly through the platform.</p>
            <br />
            <Typography variant="h6" color="text.primary">Web Interface and Customization</Typography>
            <p>Consumers can search for NFTs using the DGSelf web interface. When
              selecting assets, they can see live customization of their avatars in
              interactive 3D environment, integrated directly into the website.
              This allows for real-time visualization and interaction, enhancing
              the user experience.</p>
            <br />
            <Typography variant="h6" color="text.primary">NFT Transactions</Typography>
            <p>NFT/avatar asset holders can manage their assets through the
              DGSelf platform. They have the option to sell their assets or rent
              them out for a defined period and price. All transactions are managed
              on-chain, ensuring transparency and security.</p>
            <br />
            <Typography variant="h6" color="text.primary">Data Storage and Scalability</Typography>
            <p>A snapshot of an avatar asset, including its metadata and
              ownership details, is efficiently stored within the system.
              Considering the potential for high user engagement and numerous
              transactions, data storage will be partitioned across multiple
              canisters. This approach ensures that even with a high volume of
              assets and interactions, the system remains responsive and efficient,
              providing an optimal experience for all users as the platform grows.</p>
            <p>In summary, DGSelf combines advanced on-chain storage, real-time
              customization, and a user-friendly web interface to create a
              comprehensive platform for managing avatar assets as NFTs. This
              architecture supports creators and consumers alike, fostering a
              vibrant and interactive digital asset ecosystem.</p>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
