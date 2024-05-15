import React, { useState } from 'react'
import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useHomeData } from 'src/layouts/dashboard/config-navigation';
import PropTypes from 'prop-types'

import Image from 'src/components/image';

import TakeawaysTag from './TakeawaysTag';
import TakeawaysLabel from './TakeawaysLabel';
import TakeawayComment from './TakeawayComment';

export default function Event({takeaway}) {
//   const [showComments, setShowComments] = useState(false);
//   const [clicked, setClicked] = useState(false);
  const homeData = useHomeData()
  console.log(homeData[0].comment.props.sx);
  const {comment, vote} = homeData[0]
  comment.props.sx.width = 15;
  comment.props.sx.height = 15;
  comment.props.sx.mb = -.5;
  vote.props.sx.ml = -1;

  return (
  <Card 
  sx={{
    m: '1.5em',
    // p: '1em',
    display: 'flex',
    flexDirection: 'row',
    gap: 1,
    position: 'relative',
    borderRadius:"8px"
  }}
  >
   <Box 
  sx={{
    background:"#F4F4F5",
    // m: '1.5em',
    p: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    position: 'relative',
  }}
  >
    <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    gap: 1,
    padding:"0 1rem"
  }}>
      <Typography sx={{
    fontWeight: '500'
  }}>Mon</Typography>
   <Typography sx={{
    fontWeight: '500', fontSize:"4rem"
  }}>{18}</Typography>
     
  </Box>
  </Box>

  <Box 
  sx={{
    // m: '1.5em',
    p: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    position: 'relative',
    width:"70%"
  }}
  >

  <Typography sx={{
    fontWeight: '700', fontSize:{md:"32px", xs:"16px"}
  }}>Security Twenty 24 Event - <span style={{color: '#8D9096'}}>Riyadh</span></Typography>
  <Box sx={{
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'flex-start',
    width: '100%',
    fontSize:"16px",
    gap: 1
  }}>
     
      <Box
        
        sx={{
          cursor: 'pointer',
          '&:hover': {
            // textDecoration: 'underline',
          },
          display: 'flex',
          alignItems: 'center',
          gap: .5,
          justifyContent: 'flex-start',
          fontSize:{md:"16px", xs:"11px"},
          opacity: .6,
        }}
      >
    
      {takeaway.Report.Report}
     
    </Box>
  </Box>

  </Box>
  <Image  alt="images" src="https://plus.unsplash.com/premium_photo-1675440682547-d3be56f91621?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" sx={{ borderRadius: 1, height: 182, width: "272px", ml:"auto" }} />

  </Card>
  )
}

Event.propTypes = {
  takeaway: PropTypes.object
}