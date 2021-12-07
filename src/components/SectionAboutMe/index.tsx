import { Heading, Container, ProfileCard } from 'components'

import content from './content'
import * as S from './styles'

const SectionAboutMe = () => (
  <Container>
    <Heading reverseColor>Quem sou?</Heading>

    <S.Content>
      {content.map((profile) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          image={profile.image}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutMe
