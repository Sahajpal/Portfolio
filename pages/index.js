import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sahajpal Singh Mahla
          </Heading>
          <p>Hardcore Gamer and Crazy Developer ( Web / Android / Smart Contracts ) </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
