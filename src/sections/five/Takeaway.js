import React, { useState } from 'react'
import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useHomeData } from 'src/layouts/dashboard/config-navigation';
import PropTypes from 'prop-types'
import TakeawaysTag from './TakeawaysTag';
import TakeawaysLabel from './TakeawaysLabel';
import TakeawayComment from './TakeawayComment';

export default function Takeaway({takeaway}) {
  const [showComments, setShowComments] = useState(false);
  const [clicked, setClicked] = useState(false);
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
    p: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    position: 'relative',
  }}
  >
  {/* <Box sx={{ml: -.7}}>
    {takeaway.Tags.length > 0 && takeaway.Tags.map((tag) => (
      <TakeawaysTag key={tag} tag={tag} />
    ))}
  </Box> */}
  <Typography sx={{
    fontWeight: '500'
  }}>{takeaway.description}</Typography>
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 1
  }}>
      {/* <Avatar src={takeaway.Author.avatarUrl} alt={takeaway.Author.name} sx={{ width: 32, height: 32 }}/> */}
      {/* <Typography>{takeaway.Author.name}</Typography> */}
      <Box
        // onClick={onViewRow}
        sx={{
          cursor: 'pointer',
          '&:hover': {
            // textDecoration: 'underline',
          },
          display: 'flex',
          alignItems: 'center',
          gap: .5,
          justifyContent: 'flex-start',
          opacity: .6,
        }}
      >
      {/* {takeaway.Report.icon} */}
      {takeaway.Report.Report}
      {/* <Typography sx={{mb: 1.3, fontSize: '20px'}}>.</Typography> */}
      {/* <Typography>{takeaway.Report.time}</Typography>  */}
    </Box>
  </Box>

    {/* <MoreHorizIcon
        sx={{
          position: 'absolute',
          right: '.5em',
          top: '.2em',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
    /> */}

    <TakeawaysLabel label={takeaway.label}/>
  </Card>
  )
}

Takeaway.propTypes = {
  takeaway: PropTypes.object
}