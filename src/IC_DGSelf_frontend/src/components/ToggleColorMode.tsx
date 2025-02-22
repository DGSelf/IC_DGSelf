import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorMode({ mode, toggleColorMode }: ToggleColorModeProps) {
  return (
    <Box sx={{ maxWidth: '40px' }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="medium"
        aria-label="button to toggle theme"
        sx={{ minWidth: '40px', height: '40px', p: '4px' }}
      >
        {mode === 'dark' ?
          <WbSunnyRoundedIcon fontSize="medium" />
          :
          <ModeNightRoundedIcon fontSize="medium" />
        }
      </Button>
    </Box>
  );
}

export default ToggleColorMode;