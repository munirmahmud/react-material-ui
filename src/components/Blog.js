import { Button } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import React from 'react';

const useStyle = makeStyles({
    buttonGroup: {
        marginTop: "2rem",
    },
    primary: {
        background: "pink",
        padding: ".6rem 2rem"
    }
});

const HeaderBtn = styled(Button)({
    color: "#ff9292",
    background: "#845ec2",
})

const Blog = () => {
    const classes = useStyle();

    return (
        <div className={classes.buttonGroup}>
            <h1>Blog</h1>
            <Button className={classes.primary}>Contact Me</Button>
            <HeaderBtn>New Contact <div>Hello BTN</div></HeaderBtn>

            <Button color="primary">New contact</Button>

        </div>
    )
}

export default Blog
