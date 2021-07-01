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
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react"


// Estilos Adicionales con Styled Components
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
    width: 100px;
    height: 100px;
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

const StyledImgModal = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`
const Footer = () => {
    // Hook para la apertura del Modal de consulta del Correo Electrónico
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <div className='footer-container' style={{ padding: '10px' }}>
                <Modal isOpen={isOpen} onClose={onClose} className='modal-container'>
                    <ModalOverlay />
                    <ModalContent>
                        <StyledModalHeader>
                            <StyledImgModal src='https://i.ibb.co/6Z5HQFL/icono-gmail.png' />
                            Gmail Contact
                        </StyledModalHeader>
                        <ModalCloseButton />
                        <StyledModalBody>
                            <StyledImgBody name="Ysnaldo Lopez" src="https://i.ibb.co/b2JX0qr/Imagen-Oficial.jpg" />
                            <StyledDivGmail >
                                ysnaldolopez@gmail.com
                            </StyledDivGmail>
                        </StyledModalBody>
                    </ModalContent>
                </Modal>
                <StyledMainP>Made by Ysnaldo J. López H.</StyledMainP>
                <a href='https://github.com/YsnaldoXVen' rel="noopener noreferrer" target='_blank'>
                    <AiOutlineGithub className='social-icon' />
                </a>
                <MdEmail className='social-icon' onClick={onOpen} />
                <a href='https://twitter.com/lopezh_yjose' rel="noopener noreferrer" target='_blank'>
                    <FaTwitter className='social-icon' />
                </a>
            </div>
        </div>
    )
}

export default Footer
