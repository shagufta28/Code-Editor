import { Box , Text , Menu , MenuButton, Button , MenuList , MenuItem} from '@chakra-ui/react'
import React, { version } from 'react'
import { LANGUAGE_VERSIONS } from '../constants'

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({language , onSelect}) => {
  return (
   <Box ml={2} mb={4} >
    <Text mb={2} fontSize="-moz-initial">
       Language:
    </Text>
    <Menu isLazy>
  <MenuButton as={Button}>
   {language}
  </MenuButton>
  <MenuList bg="#262433">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.900",
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
</Menu>
   </Box>
  )
}

export default LanguageSelector