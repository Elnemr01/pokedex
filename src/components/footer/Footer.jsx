import React from 'react'
import "./footer.css"
import Button from '../button/Button'

const Footer = ({prvClick,nextClick}) => {
    return (
        <footer>
            <Button label="previous" onclick={prvClick()}/>
            <Button label="next" onclick={nextClick()}/>
        </footer>
    )
}

export default Footer
