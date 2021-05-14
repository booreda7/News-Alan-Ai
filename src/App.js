import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, Grid, Link } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import myImage from './download.jpg';
import  NewsCards  from './components/NewsCards/NewsCards';
import useStyles from './style';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: 'feb4f343c97b60731b67f1bdca83bc952e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        }  else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        <img src={myImage} className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      
        <Box className={classes.box}>
          <Container maxWidth='lg'>
            <Grid container>
              <Grid item xs={12} sm={4} className={classes.footer}>
                <Box> <strong> <h1> Contacts : </h1></strong></Box>
                
                  <li className={classes.li}> <Link  href='https://twitter.com/ArmyBhd' target='_blank'>  <TwitterIcon/> </Link> </li>
                  <li className={classes.li}> <Link  href='https://www.instagram.com/boore_da/' target='_blank'>  <InstagramIcon /> </Link> </li>
                  <li className={classes.li}> <Link  href='https://www.linkedin.com/in/reda-ait-cheikh-35021018b/' target='_blank'> <LinkedInIcon/> </Link> </li>
                
              </Grid>
            </Grid>
          </Container>
        </Box>
    
    </div>
  );
};

export default App;
