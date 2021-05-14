import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard';
import useStyles from './style.js';

const infoCards = [ { Bcolor: '#EECAAF', color : '#0F4E93',  title: 'Latest News', text: 'Give me the latest news' },
                    {Bcolor: '#F2BD94', color : '#74281F',title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
                    {Bcolor: '#EAB5AC', color : '#496075' ,title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
                    { Bcolor: '#FEA981', color : '#5C0E2F' ,title: 'News by Sources', info: 'Fox News, The Washington Post, BBC News, The Verge, New York Post, Business Insider, ABC News...', text: 'Give me the news from Fox News' }, ];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.Bcolor, color: infoCard.color }}>

                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h4"> <strong> Try saying:</strong> <br /> </Typography>
                 <Typography variant='h6'>      <i>{infoCard.text}</i> </Typography> 
                
              </div>

            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;