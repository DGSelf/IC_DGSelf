import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function Tokenomics() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="tokenomics-content"
        id="tokenomics-header"
      >
        <Typography variant="h5">
          Tokenomics
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: '0 2%' }}>
          <Typography variant="body1" color="text.secondary">
            <Typography variant="h6" color="text.primary">DGID Token Utility</Typography>
            <br />
            <Typography variant="subtitle2" color="text.primary">Governance</Typography>
            <p>The DGID token will play a vital role in the governance of DGSelf
              DAO via the Service Nervous System (SNS). Token holders will have the
              ability to vote on significant changes to the platform’s code and
              infrastructure. By using their DGID tokens, holders can directly
              influence and shape the evolution of DGSelf’s canister smart
              contracts. This democratic, on-chain decision-making process ensures
              transparency, security, and community empowerment, key principles of
              decentralization that drive DGSelf DAO’s growth and success.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">DGID Token Integration</Typography>
            <p>The DGID token will be deeply integrated at a protocol level
              within the DGSelf platform, facilitating access control and economic
              interactions. The integration of DGID tokens will enhance user
              engagement and interaction with the platform, ensuring that the token
              is central to the ecosystem.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Premium Features for Creators</Typography>
            <p>Creators will use DGID tokens to unlock premium functionalities
              within the DGSelf platform. These features may include:</p>
            <ul>
              <li>Advanced tools for creating and minting on-chain avatar assets</li>
              <li>Advertising and promoting assets on the marketplace</li>
              <li>Facilitating cross-platform asset migration</li>
              <li>Accessing enterprise-grade features and technical support</li>
            </ul>
            <p>These premium features enable creators to build, market, and
              sustain a wide array of immersive and customizable avatar
              experiences.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Premium Features for Users</Typography>
            <p>Users can utilize DGID tokens to access various premium features,
              enhancing their experience on the DGSelf platform. Tokens can be used
              to:</p>
            <ul>
              <li>Purchase exclusive avatar content, such as unique clothing and accessories</li>
              <li>Upvote and highlight exceptional assets, contributing to community-driven rankings</li>
              <li>Gain early access to new features or participate in exclusive beta testing opportunities</li>
              <li>Participate in VIP events, including virtual meet-ups with creators and community contests</li>
            </ul>
            <p>DGID tokens serve not only as a currency within the DGSelf
              ecosystem but also as a key to premium experiences, driving deeper
              engagement and fostering a dynamic and active community.</p>
            <br />
            <Typography variant="h6" color="text.primary">Initial Token Allocation</Typography>
            <p>The SNS will be initialized with 100 million DGID tokens,
              allocated as follows:</p>
            <Typography variant="subtitle2" color="text.primary">Decentralization Sale</Typography>
            <p>25% of the total supply, or 25 million DGID tokens, will be
              offered in a decentralization sale to distribute governance and raise
              funds for the SNS. The goal is to raise between 20,000 and 100,000
              ICP.</p>
            <p>Participants will deposit ICP into the SNS, and upon the sale’s
              completion, they will receive DGID tokens proportional to their ICP
              contribution. Each participant will receive their DGID tokens in five
              equal-value neurons. The first neuron will have no dissolve delay,
              making those tokens immediately liquid. The remaining neurons will
              have dissolve delays of 3, 6, 9, and 12 months respectively.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Founders and Funders</Typography>
            <p>DGSelf has been developed by a team of three with pre-seed
              funding.</p>
            <p>Team will receive 15% of the DGID tokens, distributed as four
              equal-value neurons with dissolve delay of 6 months and will be
              vested over a period of 24 months. The founders will not have access
              to any liquid DGID tokens immediately after the SNS sale, with all
              the tokens having a vesting period at that time. This ensures the
              team cannot increase their neurons dissolve delay to gain more voting
              power and therefore cannot rug-pull investors.</p>
            <p>Pre-seed investor will receive 7% of the DGID tokens, distributed
              as four equal-value neurons. Each neuron will have a dissolve delay
              of 1 month and vesting periods of 6, 12, 18, and 24 months
              respectively.</p>
            <p>Neurons with a vesting period cannot be accessed until the period
              ends, ensuring long-term commitment and preventing any potential
              rug-pull. Also these founder/funder neurons all have a relatively
              short dissolve delay of 1 month which cannot be increased, this
              ensures a reduced voting power compared to the community so that
              governance is properly decentralized.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">SNS Treasury</Typography>
            <p>After the decentralization sale, the SNS will hold the remaining
              53% of DGID tokens. These tokens will primarily reward users who
              contribute positively to the DGSelf platform, and will also fund
              community bounties for contributors, including third-party
              developers.</p>
            <p>A small portion will be allocated to initial liquidity pools on
              decentralized exchanges (DEXes). Listing DGID tokens on DEXes
              requires liquidity pools backed by ICP from the sale. Proposals will
              be made to transfer DGID and ICP to these DEXes, ensuring DGID tokens
              are tradeable.</p>
            <br />
            <Typography variant="h6" color="text.primary">Initial SNS Configuration</Typography>
            <p>The SNS will initially be configured with the following
              parameters, which can be adjusted through proposals:</p>
            <Table sx={{ width: '50%' }} size='small'>
              <TableRow>
                <TableCell>Transaction fee in DGID tokens for ledger transfers</TableCell>
                <TableCell align="right">0.001</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Number of DGID tokens for a rejected proposal</TableCell>
                <TableCell align="right">10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minimum number of DGID tokens to stake in a neuron</TableCell>
                <TableCell align="right">5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maximum voting period for a proposal</TableCell>
                <TableCell align="right">3 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Proportion of voting power needed for proposal approval</TableCell>
                <TableCell align="right">3%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minimum neuron dissolve delay to vote</TableCell>
                <TableCell align="right">1 month</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maximum neuron dissolve delay</TableCell>
                <TableCell align="right">2 years</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maximum dissolve delay bonus</TableCell>
                <TableCell align="right">2x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maximum age for age bonus</TableCell>
                <TableCell align="right">1 year</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maximum age bonus</TableCell>
                <TableCell align="right">1.25x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Annual reward generation percentage of total supply</TableCell>
                <TableCell align="right">2%</TableCell>
              </TableRow>
            </Table>
            <br />
            <Typography variant="subtitle2" color="text.primary">SNS Decentralization Sale Configuration</Typography>
            <br />
            <Table sx={{ width: '50%' }} size='small'>
              <TableRow>
                <TableCell>Total number of DGID tokens to be sold</TableCell>
                <TableCell align="right">25,000,000 (25%)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minimum ICP to be raised (sale fails if not met)</TableCell>
                <TableCell align="right">20,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maximum ICP to be raised</TableCell>
                <TableCell align="right">100,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minimum number of sale participants</TableCell>
                <TableCell align="right">100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minimum ICP per buyer</TableCell>
                <TableCell align="right">1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Maximum ICP per buyer</TableCell>
                <TableCell align="right">10,000</TableCell>
              </TableRow>
            </Table>
            <br />
            <Typography variant="h6" color="text.primary">Mitigation Against a 51% Attack</Typography>
            <p>In theory, there is a danger that the DGSelf SNS treasury could be
              the target of an attack. Specifically, the DAO could be taken over by
              a single party that effectively steals the treasury. In a so-called
              51% attack, a single party gains control of a majority of the voting
              power and pushes through a vote on a proposal to transfer the entire
              treasury to themselves.</p>
            <p>One possible scenario is for an attacker to buy a large proportion
              of the DGID tokens in the decentralization sale and immediately
              increase the dissolve delay of all their neurons to the maximum 2
              years in an attempt to gain over 50% of the SNS voting power. If
              successful, they could force through a proposal to transfer the
              entire ICP and DGID treasury to themselves.</p>
            <p>In addition to the extreme costs required for such an attack, the
              Neuron Fund provides a great deal of mitigation against this
              scenario, because it limits the proportion of voting power an
              attacker would be able to acquire.
            </p>
            <p>If an attacker manages to buy 75% of the available tokens in the
              decentralization sale, which is already extremely unlikely, and
              the attacker then increases the dissolve delay of all their
              neurons to the maximum dissolve delay of 2 years, the attacker would
              still fall short of the necessary voting power to gain control.</p>
            <br />
            <Typography variant="h6" color="text.primary">Use of Funds</Typography>
            <p>Any liquid ICP in the reserve could be used directly, or the DAO
              could swap tokens from the DGID reserve for ICP at a DEX, and use it
              to fund various expenses. These expenses include, but are not limited
              to, the following:</p>
            <ul>
              <li><p><strong>Cycles for Hosting:</strong> Ensuring the continuous
                operation of our services on the Internet Computer.</p></li>
              <li><p><strong>Development Team:</strong> Initially, during the
                first few months until the NFT marketplace is ready for a wide
                audience, funds will primarily be used to support the development
                team. Proposals will be made each quarter to fund the team. We are
                committed to transparency and community involvement in product
                development and verification, avoiding large withdrawals from the
                treasury as seen in some past cases.</p></li>
              <li><p><strong>Future Expenses:</strong> As the platform matures,
                funds will be used for third-party testing, initial content
                creation, airdropping to attract early platform users, grants, and
                similar initiatives to grow and enhance the ecosystem.</p></li>
            </ul>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}