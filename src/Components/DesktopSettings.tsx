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
    Radio,
    RadioGroup,
    Stack,
    Heading,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Draggable from 'react-draggable'
import store from 'src/globalState'
import storage from 'src/utils/functions/storage'
import modelStyles from 'styles/components/model.module.scss'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

type inputEvent = {
    target: HTMLInputElement
}

function BasicUsage() {
    const { t, i18n } = useTranslation()
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState(storage.getItem('background') ?? '')
    const handleChange = (event: inputEvent) => setValue(event.target.value)
    const [language, setLanguage] = useState(
        storage.getItem('language') ?? 'zh'
    )
    const [size, setSize] = useState('md')
    const settingsRef = useRef<HTMLDivElement>()

    const setLanguageIntoStorage = (language: string) => {
        setLanguage(language)
        storage.setItem('language', language)
    }

    useEffect(() => {
        store.func.openSettings = onOpen
    }, [])

    useEffect(() => {
        storage.getItem('background') &&
            setValue(String(storage.getItem('background')))
        storage.getItem('language') &&
            setLanguage(String(storage.getItem('language')))
    }, [])
    // DON'T RETURN A PROMISE IN A EFFECT
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language])

    return (
        <>
            {/* DON'T REMOVE THIS LINE! */}
            {/* THIS IS NOT JUNK CODE, IF THERE IS NOT A LINE LIKE THIS, THE SETTINGS COMPONENT WILL NOT BE RENDERED. */}
            <p style={{ display: 'none' }} onClick={store.func.openSettings}>
                Open Modal
            </p>

            <Modal
                closeOnOverlayClick={false}
                scrollBehavior='inside'
                isOpen={isOpen}
                onClose={onClose}
                size={size}
            >
                <ModalOverlay />
                <Draggable handle='header'>
                    <div
                        ref={settingsRef}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1500,
                        }}
                    >
                        <ModalContent
                            style={{
                                transition: 'all .35s',
                            }}
                        >
                            <ModalHeader className={modelStyles.header}>
                                {t('DesktopSettings')}
                            </ModalHeader>

                            <div
                                className={modelStyles.maxButton}
                                onClick={() => {
                                    if (size == 'full') setSize('md')
                                    else {
                                        setSize('full')
                                        settingsRef.current.style.transform =
                                            'translate(0px, 0px)'
                                    }
                                }}
                            >
                                {size === 'md' ? <AddIcon /> : <MinusIcon />}
                            </div>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stack direction={'column'} spacing='24px'>
                                    <InputGroup>
                                        <InputLeftAddon
                                            children={t('DesktopBackground')}
                                        />
                                        <Input
                                            value={value}
                                            onChange={handleChange}
                                        />
                                        <InputRightAddon
                                            children={
                                                <span
                                                    onClick={() => {
                                                        storage.setItem(
                                                            'background',
                                                            value
                                                        )
                                                        if (value == '') {
                                                            return toast({
                                                                title: t(
                                                                    'succeed'
                                                                ),
                                                                description:
                                                                    t(
                                                                        'defaultBackground'
                                                                    ),
                                                                status: 'success',
                                                                duration: 9000,
                                                                isClosable:
                                                                    true,
                                                            })
                                                        }
                                                        toast({
                                                            title: t('succeed'),
                                                            description:
                                                                t(
                                                                    'customBackground'
                                                                ),
                                                            status: 'success',
                                                            duration: 9000,
                                                            isClosable: true,
                                                        })
                                                    }}
                                                    color='green.500'
                                                >
                                                    {t('save')}
                                                </span>
                                            }
                                        />
                                    </InputGroup>
                                    <Heading as='h6' size='md'>
                                        {t('language')}
                                    </Heading>
                                    <RadioGroup
                                        onChange={setLanguageIntoStorage}
                                        value={language}
                                    >
                                        <Stack direction='row'>
                                            <Radio value='zh'>简体中文</Radio>
                                            <Radio value='en'>English</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </Stack>
                            </ModalBody>

                            <ModalFooter></ModalFooter>
                        </ModalContent>
                    </div>
                </Draggable>
            </Modal>
        </>
    )
}

export default BasicUsage
