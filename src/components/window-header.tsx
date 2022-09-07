import React from 'react';
import { Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { RmgEnvBadge, RmgWindowHeader, useAppVersion, useEnvironment } from '@railmapgen/rmg-components';
import { LanguageCode } from '@railmapgen/rmg-translate';
import { handleLanguageChange } from '../i18n/config';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { MdTranslate } from 'react-icons/md';

export default function WindowHeader() {
    const { t } = useTranslation();

    const environment = useEnvironment();
    const appVersion = useAppVersion();

    const handleSelectLanguage = (language: LanguageCode) => {
        rmgRuntime.setLanguage(language);
        handleLanguageChange(language);
    };

    return (
        <RmgWindowHeader>
            <Heading as="h4" size="md">
                {t('Seed Project')}
                <RmgEnvBadge environment={environment} version={appVersion} />
            </Heading>

            <HStack ml="auto">
                <Menu>
                    <MenuButton as={IconButton} icon={<MdTranslate />} variant="ghost" size="sm" />
                    <MenuList>
                        <MenuItem onClick={() => handleSelectLanguage(LanguageCode.English)}>English</MenuItem>
                        <MenuItem onClick={() => handleSelectLanguage(LanguageCode.ChineseSimp)}>简体中文</MenuItem>
                        <MenuItem onClick={() => handleSelectLanguage(LanguageCode.ChineseTrad)}>繁體中文</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </RmgWindowHeader>
    );
}
