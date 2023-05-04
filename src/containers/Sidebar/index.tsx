import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Albert 5a</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        Albert5a
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor de Software
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
