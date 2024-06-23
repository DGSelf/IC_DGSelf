import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Disclaimer() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="disclaimer-content"
        id="disclaimer-header"
      >
        <Typography variant="h5">
          Disclaimer
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: '0 2%' }}>
          <Typography variant="body1" color="text.secondary">
            <strong>The information presented in this white paper is subject
              to change or update and should not be considered a commitment,
              promise, or guarantee by any individual or organization mentioned in
              the document regarding the future availability of services related to
              the use of tokens or their future performance or value. Approval from
              DGSelf DAO members is required for the features or other aspects of
              the platform mentioned in the white paper.</strong>
            <p>This document is for informational purposes only and does not
              constitute an offer or solicitation to sell any securities or shares.
              It should not be construed as an invitation to buy or subscribe to
              any securities, nor should it form the basis of any contract or
              commitment. DGSelf assumes no responsibility for any loss or damage
              arising from reliance on the information contained in this document,
              including any errors or inaccuracies. Any actions taken based on the
              information in this document are taken at the reader's own risk.</p>
            <p>This document is for informational purposes only and should not be
              construed as a recommendation to buy or financial advice. Investing
              or trading in any tokens, companies, or entities based solely on this
              information involves substantial risks, including but not limited to
              pricing volatility, inadequate liquidity, and the potential complete
              loss of principal. Investors are advised to conduct independent due
              diligence, seek assistance from professional financial, legal, and
              tax experts, and develop a standalone judgment of the relevant
              markets before making any investment decision. The information
              presented in this document does not create an attorney-client
              relationship and is not a substitute for legal advice from a
              qualified attorney.</p>
            <p>This document is provided &quot;as is&quot; without warranty of
              any kind, whether expressed or implied. We have prepared all
              information herein based upon selected public market data, which we
              believe to be accurate and reliable, and our view as of this date.
              However, we do not warrant the completeness or accuracy of the
              information presented herein, and it is accordingly subject to change
              without notice. The graphs, charts, and other visual aids are for
              informational purposes only and cannot be used alone to make
              investment decisions. None of these visual aids can capture all
              factors and variables required in making such decisions. Therefore,
              no representation is made that these will assist any person in making
              investment decisions.</p>
            <p>This document may contain forward-looking statements, including
              projections, forecasts, and estimates that are speculative in nature
              and based on certain assumptions. These statements are not guarantees
              of future performance and may be impacted by inaccurate assumptions
              or known or unknown risks, uncertainties, and other factors beyond
              the control of the parties involved. As a result, actual results may
              vary significantly from the forward-looking statements contained in
              this document. No representations or warranties are made as to the
              accuracy of the forward-looking statements.</p>
            <p><strong>Any person that purchases, holds, owns, or otherwise
              directly or indirectly controls or benefits from one or more DGID
              tokens (a “Tokenholder”) agrees and acknowledges the following
              terms and conditions:</strong></p>
            <ul>
              <li>The purpose of the Tokenholder's
                interest is not for financial gain, including but not limited to
                investment, trading, speculation, or any other financial purposes.</li>
              <li>The Tokenholder is an individual
                acting independently and not representing any other party.</li>
              <li>The Tokenholder is not a United
                States citizen and is not physically present inside the United States.</li>
              <li>The DGSelf whitepaper does not
                establish any partnership or joint venture among Tokenholders, nor
                does it authorize any Tokenholder to make or enter into commitments
                for or on behalf of any other party.</li>
              <li>To the fullest extent that is
                legally permitted, each Token holder gives up any and all claims,
                actions, causes of action, loss, damage, and expense, including
                attorneys' fees and other enforcement costs, arising from or related
                to any breach or alleged breach of any fiduciary duty by any other
                Tokenholders or DGSelf. The Tokenholders intend that each
                Tokenholder and DGSelf are released from any and all fiduciary
                duties that may be required otherwise.</li>
              <li>DGSelf and its Tokenholders are
                not liable to any other Tokenholder for any indirect, special,
                consequential, or anticipated profit losses arising under any cause,
                including negligence, strict liability, contract, or otherwise.</li>
              <li>No Tokenholder shall bring any
                legal claim, action, or proceeding against any other Tokenholder or
                DGSelf on any basis.</li>
              <li>No Tokenholder is relying upon any statement or
                representation made by the founding team, DGSelf, or any other
                Tokenholder.</li>
            </ul>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
