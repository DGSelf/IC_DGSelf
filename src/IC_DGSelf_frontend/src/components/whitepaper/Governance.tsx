import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Governance() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="governance-content"
        id="governance-header"
      >
        <Typography variant="h5">
          Governance
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: '0 2%' }}>
          <Typography variant="body1" color="text.secondary">
            DGSelf DAO is a decentralized autonomous organization utilizing
            the innovative Service Nervous System (SNS) framework developed by
            the DFINITY Foundation. The SNS is an advanced form of a DAO,
            specifically created on the Internet Computer Protocol (ICP). It
            allows any decentralized application (dapp) to operate in a fully
            decentralized manner, without the need for a centralized corporation,
            board of directors, or CEO.
            <p>A key advantage of the SNS framework is its ability to foster a
              positive-sum governance approach, enabling all stakeholders to
              benefit from collective decision-making. Token holders vote on
              community proposals, with the outcomes directly influencing the
              development and evolution of the DGSelf ecosystem.</p>
            <p>The SNS governance model allows anyone to acquire DGSelf's
              governance tokens, granting them voting rights on the platform's
              direction and success. By staking tokens in voting neurons, users can
              participate in governance decisions, incentivizing them to consider
              the platform's long-term interests. This decentralized, tokenized
              governance structure ensures that no single entity has control over
              the platform’s future while allowing for continuous upgrades and
              evolution through community-responsive proposals.</p>
            <p>Built on the Internet Computer's Network Nervous System (NNS), the
              SNS governance model ensures that DGSelf benefits from the security
              and decentralization of the NNS while providing a flexible and
              dynamic governance framework.</p>
            <p>In summary, DGSelf DAO's governance model leverages the SNS to
              enable a community-driven decision-making process, allowing token
              holders to shape the platform's development and direction. By
              utilizing the security and decentralization of the NNS, DGSelf DAO
              offers a robust and transparent governance framework that promotes
              innovation and growth for all stakeholders.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">Genesis of DGSelf DAO</Typography>
            <p>DGSelf DAO will emerge from the Internet Computer (IC) community
              through an NNS proposal, voted on by IC stakeholders. As a
              community-owned and governed project, involving the community from
              the outset is essential.</p>
            <p>The founding team will deploy the latest NNS-approved canisters
              and configure them to establish DGSelf DAO. This initial setup will
              be permanently held by the SNS and publicly available for inspection.
              Control of the existing DGSelf canisters will then be transferred
              from the founding team to DGSelf DAO, ensuring that only the DAO can
              implement future changes.</p>
            <p>To initiate the creation of DGSelf DAO, an NNS proposal will
              outline the parameters of the decentralization sale and initial token
              allocation. If the proposal is accepted by the IC community, the NNS
              will commence a decentralization sale of DGID tokens, aimed at
              decentralizing governance control to the public and raising funds for
              ongoing development.</p>
            <p>Participants in the sale will deposit ICP into the NNS, receiving
              a proportion of DGID tokens based on their contribution. The proceeds
              will be held in an ICP ledger account owned by the DGSelf DAO
              governance canister.</p>
            <p>Once the sale is complete, DGSelf DAO will be fully established,
              laying a solid foundation for the project's future growth and
              development.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">SNS Proposals</Typography>
            <p>DGSelf DAO evolves through proposals enacted by DGID token holders
              voting with their neurons. Any staked neuron holder can submit
              proposals on various topics. Each neuron has one vote per proposal.</p>
            <p>Types of proposals include:</p>
            <ul>
              <li><strong>Motion proposals </strong>
                to communicate ideas or set priorities without committing the DAO to
                specific actions.</li>
              <li><strong>Canister upgrade proposals </strong>
                to upgrade dapp canisters controlled by the SNS, specifying
                a canister ID and a wasm module for code updates.</li>
              <li><strong>SNS config change proposals </strong>
                to change various SNS parameters.</li>
              <li><strong>Token transfer proposals </strong>
                to transfer DGID, ICP, or other IC-native tokens between
                the DAO and external accounts.</li>
              <li><strong>Burn token proposals </strong>
                to burn DGID tokens, reducing the total supply.</li>
              <li><strong>Custom function proposals </strong>
                allowing the SNS governance canister to call arbitrary functions on a specified
                canister, enabling complex behaviors controlled by the community.</li>
            </ul>
            <p>Upcoming proposals to look out for include:</p>
            <ul>
              <li>Transferring ICP and DGID tokens
                to DEXes to create initial liquidity pools.</li>
              <li>Allocating ICP for conversion into
                cycles to cover ongoing hosting costs.</li>
              <li>Activating the roadmap through
                community-engaged motion proposals.</li>
              <li>Distributing DGID tokens via an
                airdrop.</li>
            </ul>
            <br />
            <Typography variant="subtitle2" color="text.primary">Voting Process and Voting Rewards</Typography>
            <p>DGSelf's governance relies on proposals, providing a decentralized
              means for token holders to influence decisions. To incentivize
              participation and ensure alignment with DGSelf's long-term interests,
              token holders are rewarded for voting on proposals.</p>
            <p>Each neuron has &quot;voting power&quot; determined by its token
              value, dissolve delay bonus, and age bonus. The dissolve delay bonus
              increases linearly from 1x at zero delay to 2x at a maximum 2-year
              delay. The age bonus starts at 1x at zero age and increases to 1.25x
              at a maximum 12-month age. Neurons with longer dissolve delays and
              ages have greater voting power.</p>
            <p>To vote, neurons must hold at least 5 DGID tokens and have a
              minimum 1-month dissolve delay. Neurons with longer dissolve delays
              receive higher voting rewards, aligning their interests with DGSelf's
              long-term success. Token holders can vote explicitly or implicitly by
              following other neurons. This flexibility ensures active
              participation in DGSelf DAO's decision-making process.</p>
            <p>Proposals are adopted if the &quot;adopt&quot; votes exceed the
              &quot;reject&quot; votes after 2 days, and if the &quot;adopt&quot;
              votes represent at least 3% of the total voting power. Proposals with
              over 50% of the total voting power in favor are resolved immediately.
              Voting rewards, generated by the SNS, accrue as maturity within
              participating neurons, which can be disbursed or staked for future
              voting.</p>
            <br />
            <Typography variant="subtitle2" color="text.primary">The Power of Community Governance</Typography>
            <p>Community governance is central to DGSelf's mission and vision of
              creating a foundational platform for interoperable avatars. By
              leveraging the SNS governance model, DGSelf empowers token holders to
              propose and vote on changes to the protocol in a decentralized and
              transparent way. This ensures the project evolves according to the
              community's interests, fostering a culture of collaboration and
              innovation.</p>
            <p>Active participation in governance is incentivized through voting
              rewards, encouraging a long-term commitment to DGSelf's success. The
              fair distribution of voting power ensures that both large and small
              token holders have a voice in the governance process.</p>
            <p>As DGSelf grows, the SNS governance model will adapt to meet the
              community's evolving needs, ensuring that the platform continues to
              deliver value to all stakeholders. Through this collective effort,
              DGSelf aims to redefine digital identity and ownership in the virtual
              world, setting new standards for the Web3 ecosystem.</p>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
