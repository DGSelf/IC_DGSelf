import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Product() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="product-content"
        id="product-header"
      >
        <Typography variant="h5">
          Product
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: '0 2%' }}>
          <Typography variant="h6">DGSelf: The Next-Generation Interoperable Avatar Platform</Typography>
          <Typography variant="body1" color="text.secondary">
            <p>DGSelf is a groundbreaking avatar platform built on the Internet
              Computer Protocol (ICP) blockchain, designed to offer users true
              ownership, transparency, and security. Inspired by the functionality
              of leading avatar platforms, DGSelf takes it a step further by
              ensuring that all assets and NFTs are stored fully on-chain,
              providing unmatched levels of decentralization and user control.
              Unlike other avatar systems that operate as closed environments where
              the company provides and sells digital avatar assets themselves,
              DGSelf will create a user-generated content (UGC) marketplace where
              the community plays a central role.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Key Features</Typography>
            <br />
            <Typography variant="subtitle2" color="text.primary">Full On-Chain Storage and True Ownership</Typography>
            <p>Unlike traditional platforms, DGSelf ensures that all
              avatar-related assets—clothing, accessories, and other
              customizations—are stored entirely on-chain. This approach
              guarantees true ownership, allowing users to have complete control
              over their digital identities without relying on centralized
              entities. Every transaction and asset modification is transparently
              recorded on the blockchain, ensuring security and immutability.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">User-Generated Content (UGC)</Typography>
            <p>DGSelf will introduce robust support for User-Generated Content
              (UGC), empowering the community to create and monetize their own
              avatar assets. This feature will mirror the engagement seen in
              popular gaming platforms, where users actively contribute to and
              enhance the ecosystem. By enabling UGC, DGSelf aims to foster a
              vibrant and collaborative community where creativity thrives.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Interoperability Across Metaverses and Games</Typography>
            <p>DGSelf avatars and assets are designed to be fully interoperable,
              allowing users to seamlessly use their customized avatars across
              various open metaverses, games, and for vTubing. This
              interoperability enhances the value and utility of digital
              identities, enabling a consistent and personalized experience across
              multiple virtual environments.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Transparent and Decentralized</Typography>
            <p>DGSelf operates as an open-source platform, with all its smart
              contracts running transparently on the ICP blockchain. Users can
              verify the code and ensure that it aligns with the platform's
              promises of security and transparency. This openness builds trust
              within the community, as every aspect of the platform is open to
              scrutiny and independent verification.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Future Governance and Community Involvement</Typography>
            <p>DGSelf is committed to evolving into a community-driven platform.
              In line with this vision, we plan to implement a decentralized
              autonomous organization (DAO) structure, allowing the community to
              participate in decision-making processes. This DAO will govern the
              platform's future developments and enhancements, ensuring that DGSelf
              evolves in a way that reflects the collective interests of its users.</p>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
