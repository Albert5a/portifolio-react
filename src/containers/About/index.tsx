import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragrafo tipo="principal">
      Atualmente estudo front-end React, back-end Python na EBAC (Escola
      Britânica de Artes Criativas) e Análise e Desenvolvimento de Sistemas pela
      Universidade Estácio de Sá. Também tenho interesse pelas áreas de Ciência
      de Dados, Machine Learning, ecossistema Python e Mercado Financeiro.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Albert5a&show_icons=true&theme=dark&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Albert5a&layout=compact&langs_count=7&theme=dark" />
    </GithubSecao>
  </section>
)

export default About
