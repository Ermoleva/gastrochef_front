import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles.module.scss'

export default function AccordionMy({accordion}) {
  return (
    <div className={styles.accordion}>
      <h2 className={styles.accordion__title}>Поширені запитання</h2>
      {accordion.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <Accordion className={styles.accordion__item}>
          <AccordionSummary className={styles.accordion__item_wrap_title}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.accordion__item_title}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordion__item_subtitle}>
              {item.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
     
      
    </div>
  )
}
