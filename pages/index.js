import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Link,
  Heading,
  Image,
  useColorModeValue,
  chakra,
  Button
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sahajpal Singh Mahla
          </Heading>
          <p>
            Hardcore Gamer and Crazy Developer ( Web / Android / Smart
            Contracts)
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/sahaj.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Self-taught developer with over 3 years of experience in Web and
          Mobile Development. Performance and efficiency-oriented mindset with a
          focus on readability and customer/consumer satisfaction. Always keen
          on learning something new or improving by working on {' '}
          <Link href="https://github.com/Sahajpal" target="_blank">
            personal projects 
          </Link>
          &nbsp;or reading blogs.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button
              rightIcon={<ChevronRightIcon></ChevronRightIcon>}
              colorScheme="teal"
            >
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Chandigarh (ਚੰਡੀਗੜ੍ਹ), India 🇮🇳.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completing my Undergraduate Program in BTech CSE from Bennett
          &nbsp;University, Greater Noida.
        </BioSection>
        <BioSection>
          <BioYear>2019 - ...</BioYear>
          Have been practicing and freelancing Full stack Development
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Playing{' '}
          <Link
            href="https://steamcommunity.com/profiles/76561198083056940/"
            target="_blank"
          >
            Games
          </Link>
          , Drums, Binging Netflix, Read Books, Code some mini projects, hanging
          out with my friends and Talking to my best friend ISHA🥰 !!!
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
