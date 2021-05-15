import React from 'react';
import { Grid, Grow, Typography,Card } from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard';
import useStyles from './style.js';

const infoCards = [ 
  { Bcolor: '#ffffff', color : '#000000',  title: 'Latest News', text: 'Give me the latest news' },
  {Bcolor: '#ffffff', color : '#000000',title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  {Bcolor: '#ffffff', color : '#000000' ,title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { Bcolor: '#ffffff', color : '#000000' ,title: 'News by Sources', info: 'Fox News, The Washington Post, BBC News, The Verge, New York Post, Business Insider, ABC News...', text: 'Give me the news from Fox News' }, ];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.Bcolor, color: infoCard.color,  }}>

                <Typography variant="h5" component="h5" color='textPrimary'>{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6" color='textPrimary'>{infoCard.title.split(' ')[2]}: <br /> <Typography color='textSecondary'> {infoCard.info} </Typography> </Typography> : null}
                <Typography variant="h6" component="h4">   Try saying: <br /> </Typography>
                 <Typography variant='h6' color='textSecondary'>      <i>{infoCard.text}</i> </Typography> 
                
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