import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'
import BevconZentry from "#data/Bevcon-Cropped new.svg"

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
    <chakra.svg
      as={BevconZentry}
      key="Bevcon Zentry"
      color={color}
      width={[150, 220]}
      height={120}
      display="block"
    />
  )
}
