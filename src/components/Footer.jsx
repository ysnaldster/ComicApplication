import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react"



const StyledMainP = styled.p`
    color: #ffffff;
    font-weight: 600;
`
const StyledModalHeader = styled(ModalHeader)`
    display: flex;
    align-items: center;
`
const StyledImgBody = styled.img`
    border-radius: 50px;
`

const StyledModalBody = styled(ModalBody)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledDivGmail = styled.div`
    margin: 10px;
    font-weight: bold;
`

const Footer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <div className='footer-container'>
                <Modal isOpen={isOpen} onClose={onClose} className='modal-container'>
                    <ModalOverlay />
                    <ModalContent>
                        <StyledModalHeader>
                            <img src='https://i.ibb.co/6Z5HQFL/icono-gmail.png' width='50px' height='50px' style={{ marginRight: '20px' }} />
                            Gmail Contact
                        </StyledModalHeader>
                        <ModalCloseButton />
                        <StyledModalBody>
                            <StyledImgBody name="Ysnaldo Lopez" src="https://i.ibb.co/b2JX0qr/Imagen-Oficial.jpg" width='100px' height='100px' />
                            <StyledDivGmail >
                                ysnaldolopez@gmail.com
                            </StyledDivGmail>
                        </StyledModalBody>
                    </ModalContent>
                </Modal>
                <StyledMainP>Made by Ysnaldo J. López H.</StyledMainP>
                <a href = 'https://github.com/YsnaldoXVen' target = '_blank'>
                    <AiOutlineGithub className='social-icon' />
                </a>
                <MdEmail className='social-icon' onClick={onOpen} />
                <a href = 'https://twitter.com/lopezh_yjose' target = '_blank'>
                    <FaTwitter className='social-icon' />
                </a>
            </div>
        </div>
    )
}

export default Footer
