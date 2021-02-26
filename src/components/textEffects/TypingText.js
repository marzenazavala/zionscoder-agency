import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: 'Jura',
    color: 'rgb(44, 252, 252)',
    lineHeight: 0,
    margin: theme.spacing(5),
    fontSize: '2.5rem',
  },
}));

const TypingText = ({text}) => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === text.length) return;

    if ( subIndex === text[index].length + 1 && 
        index !== text.length - 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === text[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
    setBlink(!blink);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);



  return (
    <>
      <Typography className={classes.text}>
        {`${text[index].substring(0, subIndex)}${blink ? "|" : ""}`}
      </Typography>
    </>
  )
};

export default TypingText;