import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { currentlanguage } from '../constants';

export default function BoxSx() {
  const local = currentlanguage();

  return (
    <Box className='bg-tertiary' sx={{ width: '100%', border: '1px solid black', borderRadius: '4px', overflow: 'hidden', p: 2 }}>
      {/* Primary Section 1 */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ p: 2, backgroundColor: '#FF5733', borderRadius: '4px 4px 0 0' }}>
          <Typography variant="h6">{local.strings.apprentissagecritique.s_0}</Typography>
        </Box>
          <Box key={`section1`} sx={{ p: 2, borderBottom: '1px solid black' }}>
            <Typography>{local.strings.apprentissagecritique.s0} : <br />
              {local.strings.appcritiText.t0_1}<br />
              {local.strings.appcritiText.t0_2}
              </Typography>
          </Box>
          <Box key={`section1`} sx={{ p: 2, borderBottom: '1px solid black' }}>
            <Typography>{local.strings.apprentissagecritique.s1} :<br />
            {local.strings.appcritiText.t1_1}<br />
            {local.strings.appcritiText.t1_2}
            </Typography>
          </Box>
          <Box key={`section1`} sx={{ p: 2, borderBottom: '1px solid black' }}>
            <Typography>{local.strings.apprentissagecritique.s2} :<br />
            {local.strings.appcritiText.t2_1}<br />
            {local.strings.appcritiText.t2_2}
            </Typography>
          </Box>
      </Box>

      {/* Primary Section 2 */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ p: 2, backgroundColor: '#8bc34a', borderRadius: '4px 4px 0 0' }}>
          <Typography variant="h6">{local.strings.apprentissagecritique.s_1}</Typography>
        </Box>
        <Box key={`section2`} sx={{ p: 2, borderBottom: '1px solid black' }}>
          <Typography>{local.strings.apprentissagecritique.s3} :<br />
            {local.strings.appcritiText.t3_1}
          </Typography>
        </Box>
        <Box key={`section2`} sx={{ p: 2, borderBottom: '1px solid black' }}>
          <Typography>{local.strings.apprentissagecritique.s4} :<br />
            {local.strings.appcritiText.t4_1}
          </Typography>
        </Box>
        <Box key={`section2`} sx={{ p: 2, borderBottom: '1px solid black' }}>
          <Typography>{local.strings.apprentissagecritique.s5} :<br />
            {local.strings.appcritiText.t5_1}<br />
            {local.strings.appcritiText.t5_2}
          </Typography>
        </Box>
      </Box>

      {/* Primary Section 3 */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ p: 2, backgroundColor: '#03a9f4', borderRadius: '4px 4px 0 0' }}>
          <Typography variant="h6">{local.strings.apprentissagecritique.s_2}</Typography>
        </Box>
        <Box key={`section3`} sx={{ p: 2, borderBottom: '1px solid black' }}>
          <Typography>{local.strings.apprentissagecritique.s6} :<br />
            {local.strings.appcritiText.t6_1}<br />
            {local.strings.appcritiText.t6_2}
          </Typography>
        </Box>
        <Box key={`section3`} sx={{ p: 2, borderBottom: '1px solid black' }}>
          <Typography>{local.strings.apprentissagecritique.s7} :<br />
            {local.strings.appcritiText.t7_1}
          </Typography>
        </Box>
        <Box key={`section3`} sx={{ p: 2, borderBottom: '1px solid black' }}>
          <Typography>{local.strings.apprentissagecritique.s8} :<br />
            {local.strings.appcritiText.t8_1}<br />
            {local.strings.appcritiText.t8_2}
          </Typography>
        </Box>
        <Box key={`section3`} sx={{ p: 2, borderBottom: '1px solid black' }}>
          <Typography>{local.strings.apprentissagecritique.s9} :<br />
            {local.strings.appcritiText.t9_1}<br />
            {local.strings.appcritiText.t9_2}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}