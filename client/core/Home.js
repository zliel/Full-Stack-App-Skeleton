//Imports for each necessary module
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import javascriptLogo from './../assets/images/javascriptLogo.jpg'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 400,
    }
}), { name: "MuiHomeComponent"})
//New fix for mismatched classes/styles in production found in a Medium article at https://medium.com/javascript-in-plain-english/fixing-material-uis-classname-mismatch-for-react-75c6c2a2c409
//Fix was to add in the { name: "..." } parameter at the end of the makeStyles function

export default function Home() {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
                Home Page
            </Typography>
            
            <CardMedia className={classes.media} image={javascriptLogo} title="Javascript Logo"/>
            
            <CardContent>
                <Typography variant="body2" component="p">
                    Welcome to the homepage of my MERN Skeleton!
                </Typography>
            </CardContent>
        </Card>
    )
}