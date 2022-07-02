import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import comingSoon from '../public/images/sahaj.jpg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="comingSoon"
              title="Coming Soon!"
              thumbnail={comingSoon}
            >
              In progress coming soon
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="comingSoon"
              title="Coming Soon!"
              thumbnail={comingSoon}
            >
              In progress coming soon
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="comingSoon"
              title="Coming Soon!"
              thumbnail={comingSoon}
            >
              In progress coming soon
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="comingSoon"
              title="Coming Soon!"
              thumbnail={comingSoon}
            >
              In progress coming soon
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="comingSoon"
              title="Coming Soon!"
              thumbnail={comingSoon}
            >
              In progress coming soon
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="comingSoon"
              title="Coming Soon!"
              thumbnail={comingSoon}
            >
              In progress coming soon
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="comingSoon"
              title="Coming Soon!"
              thumbnail={comingSoon}
            >
              In progress coming soon
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
