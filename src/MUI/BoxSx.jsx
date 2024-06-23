import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function BoxSx() {
  return (
    <Box className='bg-tertiary' sx={{ width: '100%', border: '1px solid black', borderRadius: '4px', overflow: 'hidden', p: 2 }}>
      {/* Primary Section 1 */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ p: 2, backgroundColor: '#ffeb3b', borderRadius: '4px 4px 0 0' }}>
          <Typography variant="h6">Primary Section 1</Typography>
        </Box>
        {[1, 2, 3].map((subsection, index) => (
          <Box key={`section1-${index}`} sx={{ p: 2, borderBottom: '1px solid black' }}>
            <Typography>Sub-section 1.{subsection}</Typography>
          </Box>
        ))}
      </Box>

      {/* Primary Section 2 */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ p: 2, backgroundColor: '#8bc34a', borderRadius: '4px 4px 0 0' }}>
          <Typography variant="h6">Primary Section 2</Typography>
        </Box>
        {[1, 2, 3].map((subsection, index) => (
          <Box key={`section2-${index}`} sx={{ p: 2, borderBottom: '1px solid black' }}>
            <Typography>Sub-section 2.{subsection}</Typography>
          </Box>
        ))}
      </Box>

      {/* Primary Section 3 */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ p: 2, backgroundColor: '#03a9f4', borderRadius: '4px 4px 0 0' }}>
          <Typography variant="h6">Primary Section 3</Typography>
        </Box>
        {[1, 2, 3, 4].map((subsection, index) => (
          <Box key={`section3-${index}`} sx={{ p: 2, borderBottom: '1px solid black' }}>
            <Typography>Sub-section 3.{subsection}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}