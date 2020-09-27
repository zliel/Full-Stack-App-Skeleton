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
        maxWidth: 10
    }
}))
//Look into why the styles disappear from the CardMedia component
//Current fix is overriding styles
export default function Home() {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
                Home Page
            </Typography>
            
            <CardMedia className={classes.media} style={{minHeight: '400px'}} image={javascriptLogo} title="Javascript Logo"/>
            
            <CardContent>
                <Typography variant="body2" component="p">
                    Welcome to the homepage of my MERN Skeleton!
                </Typography>
            </CardContent>
        </Card>
    )
}