import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Introduction() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="introduction-content"
        id="introduction-header"
      >
        <Typography variant="h5">
          Introduction
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: '0 2%' }}>
          <Typography variant="h6" color="text.primary">Welcome to the Future of Digital Identities!</Typography>
          <Typography variant="body1" color="text.secondary">
            <p>Our interoperable avatar platform is set to transform the digital
              landscape by building a comprehensive identity solution on the
              Internet Computer Protocol (ICP) blockchain. Our innovative platform
              allows users to create, customize, and use their avatars seamlessly
              across various metaverses, games, and for vTubing, setting a new
              standard for digital self-representation and ownership.</p>
            <p>This whitepaper is an essential resource for anyone interested in
              exploring the immense potential of Internet Computer technology in
              revolutionizing digital identities. Get ready to embark on a journey
              into the future of digital identities with us!</p>
            <br />
            <Typography variant="h6" color="text.primary">Problem Statement</Typography>
            <p>The digital landscape is evolving rapidly, with the avatar
              marketplace experiencing significant growth and profitability in
              recent years. However, many of these platforms are still deeply
              rooted in the Web2 ecosystem, which poses several limitations. In the
              increasingly virtual environments of today, digital identity has
              become one of the most valuable assets. Yet, it is often managed
              through centralized systems, which can lead to issues of control,
              security, and interoperability.</p>
            <p>While there are existing platforms that allow for the minting of
              3D models within the Web3 ecosystem, none offer a comprehensive
              solution where users can fully customize their avatars and securely
              store all associated assets entirely on-chain. Current blockchain
              solutions are not equipped to handle the complexity and demands of a
              fully interoperable avatar platform.</p>
            <br />
            <Typography variant="h6" color="text.primary">Solution: DGSelf on ICP Blockchain</Typography>
            <p>DGSelf aims to revolutionize the avatar marketplace by leveraging
              the capabilities of the Internet Computer Protocol (ICP) blockchain.
              Our platform provides a decentralized solution where creators can
              mint and sell their digital assets, such as clothing and accessories
              for avatars, and consumers can purchase and customize their avatars.
              These avatars and their associated assets can then be utilized across
              any open metaverse, game, and for vTubing.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">The ICP blockchain offers several unique advantages that make it an ideal foundation for DGSelf:</Typography>
            <br />
            <Typography variant="subtitle2" color="text.primary">Superior Data Storage</Typography>
            <p>Unlike traditional blockchains where data storage is prohibitively
              expensive and inefficient, ICP offers a more scalable and
              cost-effective solution. By enabling more efficient data storage
              methods, DGSelf can store large amounts of data on-chain without
              incurring astronomical costs, making it feasible to host a fully
              on-chain avatar platform.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Low Latency</Typography>
            <p>ICP dramatically reduces transaction latency compared to
              traditional blockchains. Transactions on ICP can be processed in a
              matter of seconds, providing a seamless and responsive user
              experience akin to what users expect from Web2 applications. This low
              latency is crucial for ensuring smooth interactions within the
              platform, from asset purchases to avatar customizations.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Enhanced Processing Power</Typography>
            <p>The ICP blockchain can handle more complex computations
              efficiently, which is essential for the intricate coding required in
              avatar customization and interaction. This enhanced processing power
              ensures that DGSelf can offer high-quality, interactive experiences
              without the sluggish performance that plagues other blockchain-based
              solutions.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Efficient Hosting and File Storage</Typography>
            <p>ICP supports decentralized hosting and file storage, overcoming
              one of the major hurdles of traditional blockchains. DGSelf can host
              websites, 3D assets, and other content directly on the blockchain,
              ensuring that all data remains decentralized and secure. This
              capability allows us to offer a fully integrated and decentralized
              avatar platform that can support complex functionalities.</p>
            <br />
            <br />
            <Typography variant="h6" color="text.primary">Conclusion</Typography>
            <p>DGSelf on the ICP blockchain presents a groundbreaking solution to
              the challenges faced by current avatar marketplaces. By harnessing
              the unique capabilities of ICP, DGSelf not only provides a
              decentralized platform for minting, selling, and customizing avatars
              but also ensures that all valuable digital identities and assets are
              securely stored on-chain. This approach not only enhances security
              and control but also fosters greater interoperability across the
              digital landscape, paving the way for a truly open and interconnected
              virtual world.</p>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
