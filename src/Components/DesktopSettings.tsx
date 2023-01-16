import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import store from 'src/globalState'

type inputEvent = {
    target: HTMLInputElement
}

function BasicUsage() {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState('')
    const handleChange = (event: inputEvent) => setValue(event.target.value)

    useEffect(() => {
        store.func.openSettings = onOpen
    }, [])

    useEffect(() => {
        localStorage.getItem('background') &&
            setValue(String(localStorage.getItem('background')))
    }, [])
    return (
        <>
            {/* DON'T REMOVE THIS LINE! */}
            {/* THIS IS NOT JUNK CODE, IF THERE IS NOT A LINE LIKE THIS, THE sETTINGS COMPONENT WILL NOT RENNDERED. */}
            <p style={{ display: 'none' }} onClick={store.func.openSettings}>
                Open Modal
            </p>

            <Modal
                closeOnOverlayClick={false}
                scrollBehavior='inside'
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>桌面设置</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <InputGroup>
                            <InputLeftAddon children='桌面壁纸' />
                            <Input value={value} onChange={handleChange} />
                            <InputRightAddon
                                children={
                                    <span
                                        onClick={() => {
                                            localStorage.setItem(
                                                'background',
                                                value
                                            )
                                            if (value == '') {
                                                return toast({
                                                    title: '成功！',
                                                    description:
                                                        '您清除了自定义壁纸，您的壁纸将在下次您进入时更换为默认。',
                                                    status: 'success',
                                                    duration: 9000,
                                                    isClosable: true,
                                                })
                                            }
                                            toast({
                                                title: '成功！',
                                                description:
                                                    '您的更改将在下次进入时生效。',
                                                status: 'success',
                                                duration: 9000,
                                                isClosable: true,
                                            })
                                        }}
                                        color='green.500'
                                    >
                                        确定
                                    </span>
                                }
                            />
                        </InputGroup>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BasicUsage
